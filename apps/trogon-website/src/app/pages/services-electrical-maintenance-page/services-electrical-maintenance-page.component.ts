import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-electrical-maintenance-page',
  templateUrl: './services-electrical-maintenance-page.component.html',
  styleUrls: ['./services-electrical-maintenance-page.component.scss'],
})
export class ServicesElectricalMaintenancePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToContact(){
    this.router.navigateByUrl('/contact')
  }
}
