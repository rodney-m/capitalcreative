import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleCategoryFormComponent } from "./pages/article-category-form/article-category-form.component";
import { ArticleCategoryListComponent } from "./pages/article-category-list/article-category-list.component";
import { ArticlesFormComponent } from "./pages/articles-form/articles-form.component";
import { ArticlesListComponent } from "./pages/articles-list/articles-list.component";
const routes: Routes = [
    { path: 'categories', component: ArticleCategoryListComponent },
    { path: 'categories/form', component: ArticleCategoryFormComponent },
    { path: 'categories/form/:id', component: ArticleCategoryFormComponent },
    { path: 'form', component: ArticlesFormComponent },
    { path: 'form/:id', component: ArticlesFormComponent },
    { path: '', component: ArticlesListComponent },
    // { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ArticlessRoutingModule {

}