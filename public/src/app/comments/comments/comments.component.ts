import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Comment} from "../Comment";
import {Post} from "../../posts/posts/Post";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    comments: Comment[] = [];
    post: Post;
    comment: Comment;

    constructor(private commentsService: CommentsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.post = this.route.snapshot.data['post'];
        this.initComment();
        this.getComments();
    }

    initComment() {
        this.comment = new Comment;
        this.comment.post = this.post._id;
    }

    getComments() {
        this.commentsService.find(this.post._id)
            .then((comments) => {
                this.comments = comments;
            })
    }

    remove(comment: Comment) {
        this.commentsService.remove(comment)
            .then((resp) => {
                this.getComments();
            })
    }

    edit(id: string) {
        this.commentsService.get(id)
            .then((comment) => {
                this.comment = comment;
            })
    }

    onSave(e) {
        this.initComment();
        this.getComments()
    }


}
