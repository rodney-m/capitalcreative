import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsFormComponent } from './pages/brands-form/brands-form.component';
import { BrandsListComponent } from './pages/brands-list/brands-list.component';


import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor'
import {FileUploadModule} from 'primeng/fileupload';
import { BrandsRoutingModule } from './brands.routing.module';
import { ApiService } from '@trogon-energy/core';
import {PaginatorModule} from 'primeng/paginator';


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
  imports: [CommonModule, ...UX_MODULE, FormsModule, ReactiveFormsModule, BrandsRoutingModule],
  declarations: [BrandsFormComponent, BrandsListComponent],
  providers:[MessageService, ConfirmationService, ApiService]
})
export class BrandsModule {}
