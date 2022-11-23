import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-services-electrical-hardware-page',
  templateUrl: './services-electrical-hardware-page.component.html',
  styleUrls: ['./services-electrical-hardware-page.component.scss'],
})
export class ServicesElectricalHardwarePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToContact(){
    this.router.navigateByUrl('/contact')
  }
}
