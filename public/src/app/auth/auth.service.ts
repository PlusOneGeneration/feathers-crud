import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {FeatherService} from "../feather.service";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {

    constructor(private feathers: FeatherService,
                private router: Router,
                private userService: UserService) {
    }

    logIn(credentials?): Promise<any> {
        return this.feathers.authenticate(credentials);
    }

    logOut() {
        this.feathers.logout();
        this.userService.setUser(null);
        this.router.navigate(['auth/login']);
    }
}
