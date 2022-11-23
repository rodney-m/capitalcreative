import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trogon-energy-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.scss'],
})


export class ProjectThumbnailComponent implements OnInit {
  @Input() project! :any;
  constructor(private router : Router) {}

  ngOnInit(): void {
    
  }

  view(id:any){
    this.router.navigateByUrl(`/projects/${id}`)
  }
}
