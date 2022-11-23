import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-lighting-solutions-page',
  templateUrl: './services-lighting-solutions-page.component.html',
  styleUrls: ['./services-lighting-solutions-page.component.scss'],
})
export class ServicesLightingSolutionsPageComponent implements OnInit {
  constructor(private router : Router) {}

  ngOnInit(): void {}

  navigateToContact(){
    this.router.navigateByUrl('/contact')
  }
}
