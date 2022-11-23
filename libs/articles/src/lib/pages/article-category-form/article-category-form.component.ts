import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'trogon-energy-article-category-form',
  templateUrl: './article-category-form.component.html',
  styleUrls: ['./article-category-form.component.scss'],
})
export class ArticleCategoryFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false
  editMode = false
  constructor(
    private formBuilder : FormBuilder, 
    private articlesService: ArticlesService, 
    private messageService: MessageService,
    private location : Location,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.activatedRoute.snapshot.params['id'] ? this.editMode = true : this.editMode = false
    console.log(this.editMode)

    this.checkEditMode();
  }

  checkEditMode() {
    if (this.editMode) {
      this.articlesService.getArticleCategoryById(this.activatedRoute.snapshot.params['id']).subscribe({
        next: (res:any) => {
          this.formControls['description'].setValue(res.description);
          this.formControls['name'].setValue(res.name)
          console.log(this.formControls['name'])
        }
      })
    }
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  onSubmit(){
    this.isSubmitted = true
    if(this.form.invalid) return;
    if (this.editMode) {
      this.updateCategory()
      return;
    }
    this.articlesService.postArticleCategory(this.form.value).subscribe((res:any) => {
      console.log(res)
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Category was added!`
      });
      this.form.reset()
      setTimeout(() => {
        this.location.back()
      }, 2000);
    }, (error: any) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Category was not created!'
      });
    })
  }

  updateCategory(){
    this.articlesService.updateArticleCategory(this.activatedRoute.snapshot.params['id'], {
      id : this.activatedRoute.snapshot.params['id'],
      ...this.form.value
    }).subscribe({
      next: (res:any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Category was updated!`
        });
        this.form.reset()
        setTimeout(() => {
          this.location.back()
        }, 2000);
      },
      error: (err:any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Something went wrong',
          detail: 'Category was not updated!'
        });
      },
    })
  }

  onCancel(){
    this.location.back()
  }

  get formControls(){
    return this.form.controls
  }
}
