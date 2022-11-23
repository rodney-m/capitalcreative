import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';


import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor'
import {FileUploadModule} from 'primeng/fileupload';
import { ApiService, FileStorageApi } from '@trogon-energy/core';
import {PaginatorModule} from 'primeng/paginator';
import { ProductsRoutingModule } from './products.routing.module';
import {DropdownModule} from 'primeng/dropdown';
import { ProductsCategoryFormComponent } from './pages/product-categories/products-category-form/products-category-form.component';
import { ProductsCategoryListComponent } from './pages/product-categories/products-category-list/products-category-list.component';


const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  TagModule,
  InputMaskModule,
  FieldsetModule,
  EditorModule,
  FileUploadModule,
  PaginatorModule
];


@NgModule({
  imports: [CommonModule, UX_MODULE, ReactiveFormsModule, FormsModule, ProductsRoutingModule],
  declarations: [ProductsListComponent, ProductsFormComponent, ProductsCategoryFormComponent, ProductsCategoryListComponent],
  providers: [ApiService, ConfirmationService, MessageService, FileStorageApi]
})
export class ProductsModule {}
