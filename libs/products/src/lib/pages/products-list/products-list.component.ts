import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@trogon-energy/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'trogon-energy-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products : any = []
  page: number = 0;
  size: number = 10;
  totalRecords: number = 0;
  constructor(private service: ApiService, private router: Router, private confirmationService : ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.service.getPaginated( {page: this.page, size: this.size},'/product').subscribe({
      next: (res) => {
        this.products = res.content
        this.totalRecords = res.totalElements
      }
    })
  }

  paginate(event:any){
    this.page = event.page
    this.size = event.rows
    console.log(event)
    this.getProducts()

  }

  update(id:any) {
    this.router.navigateByUrl(`/products/form/${id}`)
  }
  delete(id:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.delete(`/product/${id}`).subscribe({
          error: (err:any) => {
            this.messageService.add({severity:'error', summary: 'Product not deleted', detail: 'Something went wrong'});
          },
          complete: ()=> {
            this.messageService.add({severity:'success', summary: 'Product deleted', detail: 'Product deleted successfully'});
            this.getProducts()
          }
        })

      },
      
  });    

  }
}
