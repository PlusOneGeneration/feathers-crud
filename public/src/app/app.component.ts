import {Component, OnInit} from '@angular/core';
import {User} from "./auth/User";
import {UserService} from "./auth/user.service";
import {AuthService} from "./auth/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user: User;

    constructor(private userService: UserService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.userService.user$
            .subscribe((user) => {
                this.user = user;
            })
    }

    logout() {
        this.authService.logOut();
    }
}
