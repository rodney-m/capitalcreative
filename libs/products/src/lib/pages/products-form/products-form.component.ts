import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, FileStorageApi } from '@trogon-energy/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'trogon-energy-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  form!: FormGroup;
  attachedImage = false;
  isSubmitted = false;
  editMode = false;
  imageDisplay!: string | ArrayBuffer| any;
  currentArticle! :any;
  brands = []
  categories :any = []
  currencyCodes = [
    {
      name : 'ZWL',
      id: 'ZWL'
    },
    {
      name : 'USD',
      id: 'USD'
    },
  ]
  page: number = 0;
  size: number = 10;
  totalRecords: number = 0;
  imageUrl = ''
  dataSheetUrl = ''
  datasheetUploaded = false;
  imageUploaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService, 
    private messageService: MessageService,
    private location : Location,
    private fileStorageApi : FileStorageApi,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands()
    this.getProductCategories()
    this.innitializeForm()
    this.checkEditMode()
  }

  getBrands(){
    this.service.getFromUrl('/brands').subscribe({
      next: (res) => { this.brands = res.content}
    })
  }
  getProductCategories(){
    this.service.getPaginated( {page: this.page, size: this.size},'/product-category').subscribe({
      next: (res) => { this.categories = res.content}
    })
  }


  innitializeForm(){
    this.form = this.formBuilder.group({
      brandId: [0, Validators.required],
      datasheetUrl: ['', Validators.required],
      detailedDescription: ['', Validators.required],
      mainImageUrl: ['', Validators.required],
      name: ['', Validators.required],
      currencyCode: ['', Validators.required],
      price: ['', Validators.required],
      productCategoryId: ['', Validators.required],
      shortDescription: ['', Validators.required],

    })
  }

  private checkEditMode() {
    this.activatedRoute.snapshot.params['id']? this.editMode = true : this.editMode = false
    this.service.getFromUrl(`/product/${this.activatedRoute.snapshot.params['id']}`).subscribe({
      next:(res:any) => {
        this.formControls['shortDescription'].setValue(res.shortDescription)
        this.formControls['name'].setValue(res.name)
        this.formControls['brandId'].setValue(res.brand.id)
        this.formControls['productCategoryId'].setValue(res.productCategory.id)
        this.formControls['detailedDescription'].setValue(res.detailedDescription)
        this.formControls['price'].setValue(res.price.value)
        this.formControls['currencyCode'].setValue(res.price.currencyCode)
        console.log(res.price.currencyCode, res.price.value)
        this.imageDisplay = res.mainImageUrl;
        this.formControls['mainImageUrl'].setValidators([]);
        this.formControls['mainImageUrl'].updateValueAndValidity();
        this.formControls['datasheetUrl'].setValidators([]);
        this.formControls['datasheetUrl'].updateValueAndValidity();

      }
    })
    
  }

  get formControls () {
    return this.form.controls
  }

  onCancel() {
    this.location.back()
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
  onPdfUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ datasheetUrl: file });
     if( this.form.get('datasheetUrl')) { this.form.get('datasheetUrl')?.updateValueAndValidity() }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        // this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
    
  }

  dataSheetUploader(dataSheetfileFormData : FormData){
    this.fileStorageApi.postToUrl('/files/upload-file', dataSheetfileFormData).subscribe({
      next: (res) => {
        this.dataSheetUrl = res.fileDownloadUri
      },
      error: () => {
        this.messageService.add({severity:'error', summary: 'Datasheet upload failed', detail: 'Something went wrong try again'});
        return;
      },
      complete: () => {
        this.messageService.add({severity:'success', summary: 'Datasheet uploaded', detail: 'Datasheet upload successful'});
        this.createProduct()
      }
    })
  }

  imageUploader(ImagefileFormData : FormData, dataSheetfileFormData : FormData){
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
        this.dataSheetUploader(dataSheetfileFormData)
      }
    })
  }

  onSubmit() {
    const ImagefileFormData = new FormData();
    const dataSheetfileFormData = new FormData();
    ImagefileFormData.append('file', this.formControls['mainImageUrl'].value);
    dataSheetfileFormData.append('file', this.formControls['datasheetUrl'].value);
    


    if(!this.editMode) {
      this.imageUploader(ImagefileFormData, dataSheetfileFormData)

      
    }
  }

  createProduct(){
    const payload = {
      brandId: this.formControls['brandId'].value,
      datasheetUrl: this.dataSheetUrl,
      detailedDescription: this.formControls['detailedDescription'].value,
      mainImageUrl: this.imageUrl,
      name: this.formControls['name'].value,
      price: {
        currencyCode: this.formControls['currencyCode'].value,
        value: this.formControls['price'].value
      },
      productCategoryId: this.formControls['productCategoryId'].value,
      shortDescription: this.formControls['shortDescription'].value
    }
    this.service.postToUrl('/product',payload).subscribe({
      next: (res:any) => {console.log(res)},
      error: (err:any) => {console.log(err)},
      complete: ()=> {
        this.attachedImage = true
        this.messageService.add({severity:'success', summary: 'Product created', detail: 'Product created successfully'});
        setTimeout(() => {
          this.location.back()
        }, 2000);
      }
    })
  }

  editProduct(){
    this.service.updateToUrl(`/product/${this.activatedRoute.snapshot.params['id']}`,{
      ...this.form.value,
      mainImageUrl: this.imageUrl ? this.imageUrl : this.currentArticle.mainImageUrl,
      id: this.currentArticle.id
    }).subscribe({
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
