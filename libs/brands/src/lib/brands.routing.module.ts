import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandsFormComponent } from "./pages/brands-form/brands-form.component";
import { BrandsListComponent } from "./pages/brands-list/brands-list.component";
const routes: Routes = [
    
    { path: 'form', component: BrandsFormComponent },
    { path: 'form/:id', component: BrandsFormComponent },
    { path: '', component: BrandsListComponent },

    // { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BrandsRoutingModule {

}