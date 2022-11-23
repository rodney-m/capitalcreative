import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-solar-installations-page',
  templateUrl: './services-solar-installations-page.component.html',
  styleUrls: ['./services-solar-installations-page.component.scss'],
})
export class ServicesSolarInstallationsPageComponent implements OnInit {
  constructor(private router : Router) {}

  ngOnInit(): void {}

  navigateToContact(){
    this.router.navigateByUrl('/get-a-quote')
  }

}
