import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@trogon-energy/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'trogon-energy-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss'],
})
export class BrandsListComponent implements OnInit {
  brands : any = []
  page: number = 0;
  size: number = 10;
  totalRecords: number = 0;

  constructor(private service: ApiService, private router: Router, private confirmationService : ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.service.getPaginated({page: this.page, size: this.size},'/brands').subscribe({
      next:(res) => {
        this.brands = res.content
        this.totalRecords = res.totalElements
      }
    })
  }

  paginate(event:any){
    this.page = event.page
    this.size = event.rows
    console.log(event)

    this.getBrands()

  }

  update(id:any) {
    this.router.navigateByUrl(`/brands/form/${id}`)
  }
  delete(id:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.delete(`/brands/${id}`).subscribe({
          error: (err:any) => {
            this.messageService.add({severity:'error', summary: 'Brand not deleted', detail: 'Something went wrong'});
          },
          complete: ()=> {
            this.messageService.add({severity:'success', summary: 'Brand deleted', detail: 'Brand deleted successfully'});
            this.getBrands()
          }
        })

      },
      
  });    

  }
}
