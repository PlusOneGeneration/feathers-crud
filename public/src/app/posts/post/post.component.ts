import {Component, OnInit} from '@angular/core';
import {Post} from "../posts/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    post: Post;

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.post = this.route.snapshot.data['post'];
    }

    back() {
        this.router.navigate(['app/posts']);
    }

}
