import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'trogon-energy-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.scss'],
})
export class ArticlesFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  attachedImage = false;
  catagories = []
  imageUrl =''
  imageDisplay!: string | ArrayBuffer| any;
  currentArticle! :any;
  constructor(
    private formBuilder: FormBuilder,
    private articlesService: ArticlesService, 
    private messageService: MessageService,
    private location : Location,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.checkEditMode()

    this.articlesService.getAllArticleCategories().subscribe((res:any)=> {
      this.catagories = res
    })
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      shortDescription: ['', Validators.required],
      title: ['', Validators.required],
      tags: ['', Validators.required],
      articleCategoryId: ['', Validators.required],
      detailedDescription: [''],
      mainImageUrl: ['', Validators.required],
    })
  }

  private checkEditMode() {
    this.activatedRoute.snapshot.params['id']? this.editMode = true : this.editMode = false
    this.articlesService.getAllArticleById(this.activatedRoute.snapshot.params['id']).subscribe({
      next:(res:any) => {
        this.currentArticle = res
        console.log(this.currentArticle)
        this.formControls['shortDescription'].setValue(res.shortDescription)
        this.formControls['title'].setValue(res.title)
        this.formControls['tags'].setValue(res.tags)
        this.formControls['articleCategoryId'].setValue(res.articleCategory.id)
        this.formControls['detailedDescription'].setValue(res.detailedDescription)

        this.imageDisplay = res.mainImageUrl;
        this.formControls['mainImageUrl'].setValidators([]);
        this.formControls['mainImageUrl'].updateValueAndValidity();

      }
    })
    
  }

  get formControls(){
    return this.form.controls
  }

  onCancel(){
    this.location.back()
  }

  myUploader(){
    const file = new FormData()
    file.append('file',this.formControls['mainImageUrl'].value)
    this.articlesService.uploadFile(file).subscribe({
      next:(res:any) => {
        this.imageUrl = res.fileDownloadUri
      },
      error:(err:any) => {
        this.messageService.add({severity:'error', summary: 'Image upload failed', detail: 'Something went wrong, try again'});
      },
      complete: ()=> {
        this.attachedImage = true
        this.messageService.add({severity:'success', summary: 'Image uploaded', detail: 'Image upload successful'});
      }
    })
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ mainImageUrl: file });
     if( this.form.get('mainImageUrl')) { this.form.get('mainImageUrl')?.updateValueAndValidity() }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }

    
  }

  onSubmit(){
    
      // if(!this.attachedImage || this.imageUrl === ''){
      //   this.messageService.add({severity:'info', summary: 'Image missing', detail: 'Upload an Image first'});
      //   return;
      // }
      

    const fileFormData = new FormData();
      fileFormData.append('file', this.formControls['mainImageUrl'].value);
    if(this.editMode) {
      if (this.formControls['mainImageUrl'].value === ''){
        this.editArticle()
      } else {
        this.articlesService.uploadFile(fileFormData).subscribe({
          next:(res:any) => {
            this.imageUrl = res.fileDownloadUri
          },
          error:(err:any) => {console.log(err)},
          complete: ()=> {
            this.attachedImage = true
            this.messageService.add({severity:'success', summary: 'Image uploaded', detail: 'Image upload successful'});
            this.editArticle()
          }
        })
      }
    } else {
      this.articlesService.uploadFile(fileFormData).subscribe({
        next:(res:any) => {
          this.imageUrl = res.fileDownloadUri
        },
        error:(err:any) => {console.log(err)},
        complete: ()=> {
          this.attachedImage = true
          this.messageService.add({severity:'success', summary: 'Image uploaded', detail: 'Image upload successful'});
          this.createArticle()
        }
      })
    }
      
  }

  createArticle(){
    this.articlesService.postArticles({
      ...this.form.value,
      mainImageUrl: this.imageUrl
    }).subscribe({
      next: (res:any) => {console.log(res)},
      error: (err:any) => {console.log(err)},
      complete: ()=> {
        this.attachedImage = true
        this.messageService.add({severity:'success', summary: 'Article created', detail: 'Article created successfully'});
        setTimeout(() => {
          this.location.back()
        }, 2000);
      }
    })
  }

  editArticle(){
    this.articlesService.editArticles({
      ...this.form.value,
      mainImageUrl: this.imageUrl ? this.imageUrl : this.currentArticle.mainImageUrl,
      id: this.currentArticle.id
    }, this.activatedRoute.snapshot.params['id']).subscribe({
      next: (res:any) => {console.log(res)},
      error: (err:any) => {console.log(err)},
      complete: ()=> {
        this.attachedImage = true
        this.messageService.add({severity:'success', summary: 'Article edited', detail: 'Article edited successfully'});
        setTimeout(() => {
          this.location.back()
        }, 2000);
      }
    })
  }
}
