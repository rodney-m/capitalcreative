import { Component, OnInit } from '@angular/core';
import { ApiService } from '@trogon-energy/core';

@Component({
  selector: 'trogon-energy-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss'],
})
export class NewsArticlesComponent implements OnInit {
  articles :any[] = []
  page= 0
  size =10
  totalElements = 0
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.service.getPaginated( {page: this.page, size : this.size}, '/article').subscribe({
      next: (res) => {
        this.articles = res.content
        this.totalElements = res.totalElements
      }
    })
  }

  paginate(event: any) {
    this.size = event.rows
    this.page = event.page
    this.getArticles()
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
}
}
