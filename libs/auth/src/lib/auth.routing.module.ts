import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContainerComponent } from "./pages/container/container.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { LoginComponent } from "./pages/login/login.component";
const  routes: Routes = [
    {
        component: ContainerComponent,
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            { path: '', pathMatch: 'full', redirectTo: 'login' },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule{

}