import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@trogon-energy/core';

@Component({
  selector: 'trogon-energy-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent implements OnInit {
  project!:any;
  constructor(private service : ApiService, private activatedRoute : ActivatedRoute ) {}

  getProject(){
    this.service.getFromUrl(`/project/${this.activatedRoute.snapshot.params['id']}`).subscribe({
      next: (res:any)=> this.project = res 
    })
  }

  ngOnInit(): void {
    this.getProject()
  }
}
