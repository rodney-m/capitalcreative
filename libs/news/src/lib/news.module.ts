import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticlesComponent } from './pages/news-articles/news-articles.component';
import { NewsArticleComponent } from './pages/news-article/news-article.component';
import { ArticleThumbnailComponent } from './components/article-thumbnail/article-thumbnail.component';
import { NewsRoutingModule } from './news.routing.module';
import { PaginatorModule } from 'primeng/paginator';


import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  TagModule,
  InputMaskModule,
  FieldsetModule,
];

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    ...UX_MODULE,
  ],
  declarations: [
    NewsArticlesComponent,
    NewsArticleComponent,
    ArticleThumbnailComponent,
  ],
  providers: [MessageService, ConfirmationService],
})
export class NewsModule {}
