import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersRoutingModule } from './users.routing.module';

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
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

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
  FieldsetModule
];

@NgModule({
  imports: [CommonModule, UsersRoutingModule, ...UX_MODULE, FormsModule, ReactiveFormsModule],
  declarations: [UsersFormComponent, UsersListComponent],
  providers: [
    MessageService,
    ConfirmationService, UsersService]
})
export class UsersModule { }
