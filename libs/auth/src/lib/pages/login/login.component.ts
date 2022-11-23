import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '@trogon-energy/core';
import { AuthService } from '../services/auth.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; 


@Component({
  selector: 'trogon-energy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup! : FormGroup
  isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private tokenService : TokenService, 
    private router: Router,
    private uiloader: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.isSubmitted = true
    if (this.loginFormGroup.invalid) return;
    this.uiloader.start()
    
    this.authService.login(this.loginFormGroup.value).subscribe((res:any) => {
      console.log(res)
      this.tokenService.setToken(res?.token)
      this.uiloader.stop()
      this.router.navigateByUrl('/')
    }, (error: any) => {
      this.uiloader.stop();
      console.log(error)
    })

    
  }

  get loginForm(){
    return this.loginFormGroup.controls
  }
}
