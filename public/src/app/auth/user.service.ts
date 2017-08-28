import {Injectable} from '@angular/core';
import {FeatherService} from "../feather.service";
import {User} from "./User";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {

    user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private feathers: FeatherService) {
    }

    create(user: User) {
        return this.feathers
            .service('users')
            .create(user);
    }

    get(id: string) {
        return this.feathers
            .service('users')
            .get(id);
    }

    setUser(user: User|null): void {
        this.user$.next(user);
    }

    getUser() {
        return this.feathers.authenticate()
            .then((resp) => {
                return this.feathers.app().passport.verifyJWT(resp.accessToken);
            })
            .then(payload => {
                return this.get(payload.userId);
            })
            .then(user => {
                this.setUser(user);
            })
    }


}
