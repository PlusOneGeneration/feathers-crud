import {Component, OnInit} from '@angular/core';
import {Post} from "./Post";
import {Router} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
    selector: 'app-post',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: Post[] = [];

    constructor(private router: Router,
                private postsService: PostsService) {
    }

    ngOnInit(): void {
        this.getPosts();
    }

    getPosts() {
        this.postsService.find()
            .then((posts) => {
                this.posts = posts;
            })
    }

    create() {
        this.router.navigate(['app/posts/create']);
    }

    remove(id: string) {
        this.postsService.remove(id)
            .then(() => {
                this.getPosts();
            })
    }

    edit(id: string): void {
        this.router.navigate(['app/posts', id, 'edit']);
    }

    show(id: string): void {
        this.router.navigate(['app/posts', id]);
    }
}
