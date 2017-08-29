import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

export const authRoutes: Routes = [

            {
                path: 'registration',
                component: RegistrationComponent
            },
            {
                path: 'login',
                component: LoginComponent
            }

];

@NgModule({
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
