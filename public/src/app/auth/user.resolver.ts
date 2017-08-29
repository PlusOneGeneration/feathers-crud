import {Resolve, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {User} from "./User";
import {UserService} from "./user.service";

@Injectable()
export class UserResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<User> {
        return this.userService.getUser()
            .catch(err => {
                this.router.navigate(['/login']);
            });
    }
}
