import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@trogon-energy/core';

@Component({
  selector: 'trogon-energy-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
})
export class NewsArticleComponent implements OnInit {
  article!:any;
  constructor(private service: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle(){
    this.service.getFromUrl(`/article/${this.activatedRoute.snapshot.params['id']}`).subscribe({
      next: (res) => {
        this.article = res
      }
    })
  }
}
