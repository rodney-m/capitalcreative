import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, FileStorageApi } from '@trogon-energy/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'trogon-energy-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss'],
})
export class ProjectsFormComponent implements OnInit {
  form!: FormGroup;
  attachedImage = false;
  isSubmitted = false;
  editMode = false;
  imageDisplay!: string | ArrayBuffer| any;  
  page: number = 0;
  size: number = 10;
  totalRecords: number = 0;
  imageUrl = ''
  imageUploaded = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService, 
    private messageService: MessageService,
    private location : Location,
    private fileStorageApi : FileStorageApi,
    private activatedRoute : ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.innitializeForm()
    this.checkEditMode()
  }

  

  innitializeForm(){
    this.form = this.formBuilder.group({
      detailedDescription : ['', Validators.required],//
      mainImageUrl: ['', Validators.required],
      batterySystemSize: ['', Validators.required],
      dateCommissioned: ['', Validators.required],//
      electricityGeneration: ['', Validators.required],
      estimatedCo2Savings: ['', Validators.required],
      inverterType: ['', Validators.required],
      lifetimeBenefits: ['', Validators.required],
      shortDescription: ['', Validators.required],
      location: ['', Validators.required],//
      panelBrand: ['', Validators.required],
      pvSystemSize: ['', Validators.required],
      specialFeatures: ['', Validators.required],
      systemType: ['', Validators.required],
      title: ['', Validators.required],//

    })
  }

  get formControls () {
    return this.form.controls
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
    const fileFormData = new FormData();
    fileFormData.append('file', this.formControls['mainImageUrl'].value)
    if(!this.editMode){
      this.imageUploader(fileFormData)
    } else {
      this.editProject(fileFormData)
    }
  }

  imageUploader(ImagefileFormData : FormData){
    this.fileStorageApi.postToUrl('/files/upload-file', ImagefileFormData).subscribe({
      next: (res) => {
        this.imageUrl = res.fileDownloadUri
      },
      error: () => {
        this.messageService.add({severity:'error', summary: 'Image upload failed', detail: 'Something went wrong try again'});
        return;
      },
      complete: () => {
        this.messageService.add({severity:'success', summary: 'Image uploaded', detail: 'Image upload successful'});
        this.editMode ? this.updateProject() :  this.createProject()
      }
    })
  }

  createProject(){
    const payload = {
      "detailedDescription": this.formControls['detailedDescription'].value,
      "mainImageUrl": this.imageUrl,
      "projectData": {
        "batterySystemSize": this.formControls['batterySystemSize'].value,
        "dateCommissioned":  this.formControls['dateCommissioned'].value,
        "electricityGeneration": this.formControls['electricityGeneration'].value,
        "estimatedCo2Savings": this.formControls['estimatedCo2Savings'].value,
        "inverterType": this.formControls['inverterType'].value,
        "lifetimeBenefits": this.formControls['lifetimeBenefits'].value,
        "location": this.formControls['location'].value,
        "panelBrand": this.formControls['panelBrand'].value,
        "pvSystemSize": this.formControls['pvSystemSize'].value,
        "specialFeatures": this.formControls['specialFeatures'].value,
        "systemType": this.formControls['systemType'].value
      },
      "shortDescription": this.formControls['shortDescription'].value,
      "title": this.formControls['title'].value
    }
    this.service.postToUrl('/project',payload).subscribe({
      next: (res:any) => {console.log(res)},
      error: (err:any) => {console.log(err)},
      complete: ()=> {
        this.attachedImage = true
        this.messageService.add({severity:'success', summary: 'Project created', detail: 'Project created successfully'});
        setTimeout(() => {
          this.location.back()
        }, 2000);
      }
    })
  }

  onCancel(){
    this.location.back()
  }


  private checkEditMode() {
    this.activatedRoute.snapshot.params['id']? this.editMode = true : this.editMode = false
    this.service.getFromUrl(`/project/${this.activatedRoute.snapshot.params['id']}`).subscribe({
      next:(res:any) => {
        this.formControls['shortDescription'].setValue(res.shortDescription)
        this.formControls['title'].setValue(res.title)
        this.formControls['detailedDescription'].setValue(res.detailedDescription)
        this.formControls['batterySystemSize'].setValue(res.projectData.batterySystemSize)
        this.formControls['dateCommissioned'].setValue(res.projectData.dateCommissioned)
        this.formControls['electricityGeneration'].setValue(res.projectData.electricityGeneration)
        this.formControls['estimatedCo2Savings'].setValue(res.projectData.estimatedCo2Savings)
        this.formControls['inverterType'].setValue(res.projectData.inverterType)
        this.formControls['lifetimeBenefits'].setValue(res.projectData.lifetimeBenefits)
        this.formControls['location'].setValue(res.projectData.location)
        this.formControls['panelBrand'].setValue(res.projectData.panelBrand)
        this.formControls['pvSystemSize'].setValue(res.projectData.pvSystemSize)
        this.formControls['specialFeatures'].setValue(res.projectData.specialFeatures)
        this.formControls['systemType'].setValue(res.projectData.systemType)
  
        
        this.imageDisplay = res.mainImageUrl;
        this.imageUrl = res.mainImageUrl;
        this.formControls['mainImageUrl'].setValidators([]);
        this.formControls['mainImageUrl'].updateValueAndValidity();

      }
    })
    
  }

  updateProject(){
    const payload = {
      "id" : this.activatedRoute.snapshot.params['id'],
      "detailedDescription": this.formControls['detailedDescription'].value,
      "mainImageUrl": this.imageUrl,
      "projectData": {
        "batterySystemSize": this.formControls['batterySystemSize'].value,
        "dateCommissioned":  this.formControls['dateCommissioned'].value,
        "electricityGeneration": this.formControls['electricityGeneration'].value,
        "estimatedCo2Savings": this.formControls['estimatedCo2Savings'].value,
        "inverterType": this.formControls['inverterType'].value,
        "lifetimeBenefits": this.formControls['lifetimeBenefits'].value,
        "location": this.formControls['location'].value,
        "panelBrand": this.formControls['panelBrand'].value,
        "pvSystemSize": this.formControls['pvSystemSize'].value,
        "specialFeatures": this.formControls['specialFeatures'].value,
        "systemType": this.formControls['systemType'].value
      },
      "shortDescription": this.formControls['shortDescription'].value,
      "title": this.formControls['title'].value
    }
    this.service.updateToUrl(`/project/${this.activatedRoute.snapshot.params['id']}`,payload).subscribe({
      next: (res:any) => {console.log(res)},
      error: (err:any) => {console.log(err)},
      complete: ()=> {
        this.attachedImage = true
        this.messageService.add({severity:'success', summary: 'Project updated', detail: 'Project updated successfully'});
        setTimeout(() => {
          this.location.back()
        }, 2000);
      }
    })
  }


  editProject(fileFormData : FormData){
    if (!(this.formControls['mainImageUrl'].value === '')) {
      this.imageUploader(fileFormData)
    } else {
      this.updateProject()
      
    }
  }

}
