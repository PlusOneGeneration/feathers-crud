import {Injectable} from '@angular/core';
import {FeatherService} from "../feather.service";
import {Comment} from "./Comment";

@Injectable()
export class CommentsService {

    constructor(private feathers: FeatherService) {
    }

    save(comment: Comment) {
        return comment._id ? this.update(comment) : this.create(comment);
    }

    find(id: any) {
        let query = {query: {post:id}};
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('comments')
                    .find(query);
            })
    }

    get(id: string) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('comments')
                    .get(id);
            })
    }

    create(comment: Comment) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('comments')
                    .create(comment);
            })

    }

    remove(comment: Comment) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('comments')
                    .remove(comment._id, comment);
            })
    }

    update(comment: Comment) {
        return this.feathers.authenticate()
            .then(() => {
                return this.feathers
                    .service('comments')
                    .update(comment._id, comment);
            })
    }

}
