import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-borehole-pump-installations-page',
  templateUrl: './services-borehole-pump-installations-page.component.html',
  styleUrls: ['./services-borehole-pump-installations-page.component.scss'],
})
export class ServicesBoreholePumpInstallationsPageComponent implements OnInit {
  constructor(private router : Router) {}

  ngOnInit(): void {}

  navigateToContact(){
    this.router.navigateByUrl('/contact')
  }


}
