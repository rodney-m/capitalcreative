import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ArticlesService } from '../../services/articles.service'; 

@Component({
  selector: 'trogon-energy-article-category-list',
  templateUrl: './article-category-list.component.html',
  styleUrls: ['./article-category-list.component.scss'],
})
export class ArticleCategoryListComponent implements OnInit {
  categories = []
  isLoading = false;
  constructor(private articlesService : ArticlesService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.isLoading = true
    this.articlesService.getAllArticleCategories().subscribe((res:any) => {
      this.categories = res
      this.isLoading = false
    }, (error:any) => {
      this.isLoading = false
      console.log(error)
    })
  }

  updateCategory(id:any){
    this.router.navigateByUrl('/articles/categories/form/'+id)
  }


  deleteCategory(id:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.articlesService.deleteArticleCategory(id).subscribe({
          error: (err:any) => {
            this.messageService.add({severity:'error', summary: 'Article not deleted', detail: 'Something went wrong'});
          },
          complete: ()=> {
            this.messageService.add({severity:'success', summary: 'Article deleted', detail: 'Article deleted successfully'});
            this.getCategories()
          }
        })

      },
      
  });    

  }
}
