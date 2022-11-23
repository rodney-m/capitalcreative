import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trogon-energy-article-thumbnail',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.scss'],
})
export class ArticleThumbnailComponent implements OnInit {
  @Input() article! :any;
  constructor() {}

  ngOnInit(): void {}
}
