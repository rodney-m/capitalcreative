import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@trogon-energy/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'trogon-energy-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./brands-form.component.scss'],
})
export class BrandsFormComponent implements OnInit {
  isSubmitted = false;
  editMode = false;
  form! : FormGroup;
  currentBrand!: any;
  constructor(
    private formBuilder: FormBuilder, 
    private service: ApiService, 
    private messageService : MessageService, 
    private location : Location,
    private activatedRoute: ActivatedRoute,
    private confirmationService : ConfirmationService) {}

  checkEditMode() {
    if (this.editMode) {

      this.service.get('brands/'+this.activatedRoute.snapshot.params['id']).subscribe({
        next: (res:any) => {
          this.formControls['description'].setValue(res.description);
          this.formControls['name'].setValue(res.name)          
          this.currentBrand = res
        }
      })
    }

    console.log(this.currentBrand, " ", this.editMode)
  }


  ngOnInit(): void {
    this.activatedRoute.snapshot.params['id'] ? this.editMode = true : this.editMode = false
    this.initializeForm()
    this.checkEditMode()
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.editMode) {
      this.editBrand()
    } else {
      this.createBrand()
    }
  }
  onCancel() {
    this.location.back()
  }

  createBrand() {
    this.service.postToUrl('/brands', this.form.value).subscribe({
      next: (res) => {
        console.log(res)
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Brand was added!`
        });
        this.form.reset()
        this.location.back()
      },
      error: (err:any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: `Brand was not added!`
        });
      }
    })
  }
  editBrand() {
    console.log("edit")
    const payload = {
      id: this.currentBrand.id,
      name: this.formControls['name'].value,
      description: this.formControls['description'].value
    }
    this.service.updateToUrl('/brands/'+this.currentBrand.id, payload).subscribe({
      next: (res) => {
        console.log(res)
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Brand was added!`
        });
        this.form.reset()
        setTimeout(()=> this.location.back(), 2000)
        
      },
      error: (err:any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: `Brand was not added!`
        });
      }
    })
  }

  

  get formControls () {
    return this.form.controls
  }
}
