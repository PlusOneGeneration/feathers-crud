import {Component, OnInit} from '@angular/core';
import {User} from "../User";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    user: User;

    constructor(private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        this.user = new User;
    }

    registration() {
        this.userService.create(this.user)
            .then(() => {
                this.gotoLogin();
            })
    }

    gotoLogin(){
        this.router.navigate(['/login']);
    }

}
