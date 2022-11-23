import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { AuthService } from './pages/services/auth.service';
import { HttpClientModule } from '@angular/common/http';



const UX_MODULE = [
  CardModule,
  CardModule,
  ToastModule,
  InputTextModule,
  ButtonModule,
  InputMaskModule,
]

@NgModule({
  imports: [CommonModule, AuthRoutingModule,FormsModule, ...UX_MODULE,
    ReactiveFormsModule, ],
  declarations: [ContainerComponent, LoginComponent, ForgotPasswordComponent],
  providers: [AuthService]
})
export class AuthModule {}
