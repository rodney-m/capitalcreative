import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsCategoryFormComponent } from "./pages/product-categories/products-category-form/products-category-form.component";
import { ProductsCategoryListComponent } from "./pages/product-categories/products-category-list/products-category-list.component";
import { ProductsFormComponent } from "./pages/products-form/products-form.component";
import { ProductsListComponent } from "./pages/products-list/products-list.component";

const routes: Routes = [
    
    { path: 'form', component: ProductsFormComponent },
    { path: 'form/:id', component: ProductsFormComponent },
    { path: 'category', component: ProductsCategoryListComponent },
    { path: 'category/form', component: ProductsCategoryFormComponent },
    { path: 'category/form/:id', component: ProductsCategoryFormComponent },
    { path: '', component: ProductsListComponent },

    // { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {

}