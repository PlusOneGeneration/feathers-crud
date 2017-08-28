import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Post} from "./posts/Post";
import {PostsService} from "./posts.service";



@Injectable()
export class PostResolver implements Resolve<Post> {
    constructor(
        private postsService: PostsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Post> {
        return this.postsService.get(route.params['postId']);
    }
}
