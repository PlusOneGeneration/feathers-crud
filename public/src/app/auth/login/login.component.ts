import {Component, OnInit} from '@angular/core';
import {User} from "../User";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.user = new User();
        this.user.strategy = 'local';
    }

    login() {
        this.authService.logIn(this.user)
            .then(() => {
                this.router.navigate(['app/posts']);
            })
    }

    gotoRegistration(){
        this.router.navigate(['/registration']);
    }


}
