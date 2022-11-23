import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@trogon-energy/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'trogon-energy-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  projects : any = []
  page: number = 0;
  size: number = 10;
  totalRecords: number = 0;
  constructor(private service: ApiService, private router: Router, private confirmationService : ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this.service.getPaginated( {page: this.page, size: this.size},'/project').subscribe({
      next: (res) => {
        this.projects = res.content
        this.totalRecords = res.totalElements
      }
    })
  }


  paginate(event:any){
    this.page = event.page
    this.size = event.rows
    this.getProjects()
  }

  update(id:any) {
    this.router.navigateByUrl(`/projects/form/${id}`)
  }
  delete(id:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.delete(`/project/${id}`).subscribe({
          error: (err:any) => {
            this.messageService.add({severity:'error', summary: 'Project not deleted', detail: 'Something went wrong'});
          },
          complete: ()=> {
            this.messageService.add({severity:'success', summary: 'Project deleted', detail: 'Project deleted successfully'});
            this.getProjects()
          }
        })

      },
      
  });    

  }

  

}
