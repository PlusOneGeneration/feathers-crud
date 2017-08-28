import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {UserResolver} from "./user.resolver";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AuthRoutingModule,
    ],
    declarations: [RegistrationComponent, LoginComponent],
    providers: [UserService, AuthService,UserResolver]
})
export class AuthModule {
}
