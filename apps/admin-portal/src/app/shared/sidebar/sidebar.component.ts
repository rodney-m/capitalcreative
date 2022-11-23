import { Component, OnInit } from '@angular/core';
import { TokenService } from '@trogon-energy/core';

@Component({
  selector: 'trogon-energy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {}

  logoutUser(){
    this.tokenService.clearToken();
    window.location.reload();
  }
}
