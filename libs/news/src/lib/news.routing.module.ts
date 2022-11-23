import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsArticleComponent } from "./pages/news-article/news-article.component";
import { NewsArticlesComponent } from "./pages/news-articles/news-articles.component";
const routes: Routes = [
    { path: '', component: NewsArticlesComponent },
    { path: ':id', component: NewsArticleComponent },
    // { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewsRoutingModule {

}