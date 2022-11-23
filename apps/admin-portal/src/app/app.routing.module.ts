import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@trogon-energy/core";
import { DashboardComponent } from "@trogon-energy/dashboard";
import { ProjectsFormComponent, ProjectsListComponent } from "@trogon-energy/projects";
import { ShellComponent } from "./shared/shell/shell.component";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('@trogon-energy/auth').then((m)=> m.AuthModule)
    },
    {
        path:'',
        canActivate: [AuthGuard],
        component: ShellComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            { path: 'users', loadChildren: ()=> import('@trogon-energy/users').then((m) => m.UsersModule)},
            { path: 'articles', loadChildren: ()=> import('@trogon-energy/articles').then((m) => m.ArticlesModule)},
            { path: 'news', loadChildren: ()=> import('@trogon-energy/news').then((m) => m.NewsModule)},
            { path: 'brands', loadChildren: ()=> import('@trogon-energy/brands').then((m) => m.BrandsModule)},
            { path: 'products', loadChildren: ()=> import('@trogon-energy/products').then((m) => m.ProductsModule)},
            { path: 'projects', component: ProjectsListComponent},
            { path: 'projects/form', component: ProjectsFormComponent},
            { path: 'projects/form/:id', component: ProjectsFormComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}