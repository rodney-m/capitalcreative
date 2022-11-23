import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-alarm-systems-page',
  templateUrl: './services-alarm-systems-page.component.html',
  styleUrls: ['./services-alarm-systems-page.component.scss'],
})
export class ServicesAlarmSystemsPageComponent implements OnInit {
  constructor(private router : Router) {}

  ngOnInit(): void {}

  navigateToContact(){
    this.router.navigateByUrl('/contact')
  }
}
