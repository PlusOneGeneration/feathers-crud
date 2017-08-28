import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {PostsService} from "../posts.service";
import {Post} from "../posts/Post";

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

    post: Post;
    err: any;

    constructor(private router: Router,
                private postsService: PostsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.post = this.route.snapshot.data['post'];
        this.post = this.post ? this.post : new Post();
    }

    save() {
        this.postsService.save(this.post)
            .then(() => {
                this.router.navigate(['app/posts']);
            })
            .catch((err) => {
                this.err = err;
                console.log("ERR: ", err);
            })
    }

    back() {
        this.router.navigate(['app/posts']);
    }

}
