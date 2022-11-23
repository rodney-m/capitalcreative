import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticlesFormComponent } from './pages/articles-form/articles-form.component';
import { ArticleCategoryListComponent } from './pages/article-category-list/article-category-list.component';
import { ArticleCategoryFormComponent } from './pages/article-category-form/article-category-form.component';
import { ArticlessRoutingModule } from './articles.routing.module';

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

];

@NgModule({
  imports: [CommonModule, ArticlessRoutingModule, ...UX_MODULE, FormsModule, ReactiveFormsModule],
  declarations: [
    ArticlesListComponent,
    ArticlesFormComponent,
    ArticleCategoryListComponent,
    ArticleCategoryFormComponent,
  ],
  providers:[MessageService,ConfirmationService]
})
export class ArticlesModule {}
