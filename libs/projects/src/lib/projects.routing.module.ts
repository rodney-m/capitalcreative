import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SingleProjectComponent } from "./pages/single-project/single-project.component";
const routes: Routes = [
    {path : ':id', component: SingleProjectComponent},
    {path : '', component: ProjectsComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule {

}