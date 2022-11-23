import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'trogon-energy-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles = [];
  isLoading = false;
  constructor(private articlesService: ArticlesService, private router: Router, private messageService: MessageService,private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.isLoading = true
    this.articlesService.getAllArticles().subscribe((res:any) => {
      this.articles = res
      this.isLoading = false
    }, (error:any) => {
      this.isLoading = false
      console.log(error)
    })
  }

  updateArticle(id:any){
      this.router.navigateByUrl('articles/form/'+ id)
  }

  deleteArticle(id:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.articlesService.deleteArticle(id).subscribe({
          error: (err:any) => {
            this.messageService.add({severity:'error', summary: 'Article not deleted', detail: 'Something went wrong'});
          },
          complete: ()=> {
            this.messageService.add({severity:'success', summary: 'Article deleted', detail: 'Article deleted successfully'});
            this.getArticles();
          }
        })

      },
      
  });    

  }





}
