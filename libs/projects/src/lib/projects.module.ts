import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectThumbnailComponent } from './components/project-thumbnail/project-thumbnail.component';
import { ProjectsListComponent } from './pages/admin-portal/projects-list/projects-list.component';
import { ProjectsFormComponent } from './pages/admin-portal/projects-form/projects-form.component';

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
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { ApiService, FileStorageApi } from '@trogon-energy/core';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SingleProjectHeaderComponent } from './components/single-project-header/single-project-header.component';

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
  PaginatorModule,
  CalendarModule,
];

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ...UX_MODULE,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    SingleProjectComponent,
    ProjectThumbnailComponent,
    ProjectsListComponent,
    ProjectsFormComponent,
    SingleProjectHeaderComponent,
  ],
  exports: [ProjectsListComponent, ProjectsFormComponent],
  providers: [ApiService, ConfirmationService, MessageService, FileStorageApi],
})
export class ProjectsModule {}
