import {Injectable} from '@angular/core';
import {FeatherService} from "../feather.service";
import {Post} from "./posts/Post";

@Injectable()
export class PostsService {

    constructor(private feathers: FeatherService) {
    }

    save(post: Post) {
        return post._id ? this.update(post) : this.create(post);
    }

    find() {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('posts')
                    .find();
            })

    }

    get(id: string) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('posts')
                    .get(id);
            })

    }

    create(post: Post) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('posts')
                    .create(post);
            })

    }

    remove(id: string) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('posts')
                    .remove(id);
            })

    }

    update(post: Post) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('posts')
                    .update(post._id, post);
            })

    }

}
