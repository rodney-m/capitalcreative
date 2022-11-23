import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'trogon-energy-get-quote-form',
  templateUrl: './get-quote-form.component.html',
  styleUrls: ['./get-quote-form.component.scss'],
})
export class GetQuoteFormComponent implements OnInit {
  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private quoteService: QuotesService) {}
  form! : FormGroup;
  appliancesArray : any[] = [
    {name: 'Fridge', value: 'Fridge'},
    {name:'Freezer', value: 'Freezer'},
    {name: 'LED Lighting', value: 'LED Lighting'},
    {name : 'Security Lighting (Outside)', value : 'Security Lighting (Outside)'},
    {name :'TV & Decoder', value :'TV & Decoder'},
    {name: 'Stereo HiFi System', value: 'Stereo HiFi System'},
    {name: 'Kettle', value: 'Kettle'},
    {name : 'Toaster', value : 'Toaster'},
    {name: 'Microwave', value: 'Microwave'},
    {name: 'Borehole Pump', value: 'Borehole Pump'},
    {name: 'Pool Pump', value: 'Pool Pump'},
    {name: 'Water Booster Pump', value: 'Water Booster Pump'},
    {name :'Vacuum Cleaner', value: 'Vacuum Cleaner'},
    {name :'Sewing Machine', value: 'Sewing Machine'},
    {name: 'Washing Machine (Hot)', value: 'Washing Machine (Hot)'},
    {name: 'Washing Machine (Cold)', value: 'Washing Machine (Cold)'},
    {name: 'PC', value: 'PC'},
    {name: 'Laptop', value: 'Laptop'},
    {name: 'InkJet Printer', value: 'InkJet Printer'},
    {name: 'Laser Printer', value: 'Laser Printer'},
  ]

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
      // appliances: this.formBuilder.array([]),
      appliances: this.formBuilder.array([]),
      budget: ['', Validators.required],
      choosingTheRightSystem: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      howDidYouHearAboutUs: ['', Validators.required],
      otherInformation: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      roofPitchedOrFlat: ['', Validators.required],
      roofType: ['', Validators.required],
      systemRequirements: ['', Validators.required],
    })
  }

  onCheckBoxChange(e:any){
    console.log("check")
    const checkArray : FormArray = this.form.get('appliances') as FormArray;
    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value))
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if(item.value == e.target.value){
          checkArray.removeAt(i)
          return;
        }
        i++
      })
    }
    console.log(checkArray)
  }

  submit(){
    console.log(this.form.value)
    if(this.form.invalid){
      this.messageService.add({
        severity: 'error',
        summary: 'Failed',
        detail: 'Fill in all required fields'
      });
      return;
    }
    this.quoteService.createQuote(this.form.value).subscribe((res:any) => {
      console.log(res)
      this.messageService.add({
        severity: 'success',
        summary: 'Quote request sent',
        detail: 'Your quoatation request has been received we will contact you shortly!'
      });
    }, (error:any) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Failed',
        detail: 'An error occured try again later'
      });
    })
  }

  get FormControls (){
    return this.form.controls
  }
  get appliances() {
    return this.form.controls["appliances"] as FormArray;
  }
}
