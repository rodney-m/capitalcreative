import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-cctv-page',
  templateUrl: './services-cctv-page.component.html',
  styleUrls: ['./services-cctv-page.component.scss'],
})
export class ServicesCctvPageComponent implements OnInit {
  constructor(private router : Router) {}

  navigateToContact(){
    this.router.navigateByUrl('/contact')
  }

  ngOnInit(): void {}
}
