import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersFormComponent } from "./pages/users-form/users-form.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
const routes: Routes = [
    {path : '', component: UsersListComponent},
    {path : 'form', component: UsersFormComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {

}