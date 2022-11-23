import { Component, OnInit } from '@angular/core';
import { ApiService } from '@trogon-energy/core';

@Component({
  selector: 'trogon-energy-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects :any[] = []
  page = 0
  size = 10
  totalElements = 0
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(){
    this.service.getPaginated({size : this.page, page: this.page},'/project').subscribe({
      next: (res) =>  {
        this.projects = res.content
        this.totalElements = res.totalElements
      }
    })
  }
}
