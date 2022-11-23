import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '@trogon-energy/contact';
import { ApiService } from '@trogon-energy/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'trogon-energy-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form! : FormGroup;
  constructor(
    private messageService : MessageService, 
    private formbuilder : FormBuilder, 
    private contactService : ContactService,
    service: ApiService) {}

  ngOnInit(): void {
    this.innitializeForm()
  }

  innitializeForm(){
    this.form = this.formbuilder.group({
      fullName : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      email : ['', Validators.required],
      subject : ['', Validators.required],
      message : ['', Validators.required],
    })
  }

  send(){
    if(this.form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Fill in all fields correctly!'
      });
      return;
    }
    const payload = {
      "customerEmail": this.formControls['email'].value,
      "fullName": this.formControls['fullName'].value,
      "message": this.formControls['message'].value,
      "phoneNumber": this.formControls['phoneNumber'].value,
      "subject": this.formControls['subject'].value
    }

    this.contactService.sendContactUsRequest(payload).subscribe((res:any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Contact request sent successfully!`
      });
      this.form.reset()
    }, (error: any) =>{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Contact request was not sent!'
      });
    })
  }

  get formControls(){
    return this.form.controls
  }
}
