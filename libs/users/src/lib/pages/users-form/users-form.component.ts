import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'trogon-energy-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  usersForm!: FormGroup
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private messageService : MessageService, private location: Location) { }

  ngOnInit(): void {
    this.usersForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        groupId: [2],
        lastName: ['', Validators.required],
        password: ['', Validators.required],
        username: ['', Validators.required]
      }
    )
  }

  onSubmit(){
    this.isSubmitted = true
    if(this.usersForm.invalid) return;
    this.usersService.createUser(this.usersForm.value).subscribe((res:any) => {
      console.log(res)
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User was created!`
      });
      this.usersForm.reset()
      setTimeout(() => {
        this.location.back()
      }, 2000);
    }, (error: any) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'User was not created!'
      });
    })
  }

  onCancel(){
      this.location.back()
  }

  get userForm (){
    return this.usersForm.controls
  }
}
