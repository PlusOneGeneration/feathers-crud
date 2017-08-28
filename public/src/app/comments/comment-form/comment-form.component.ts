import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Comment} from "../Comment";
import {CommentsService} from "../comments.service";

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
    @Input() comment: Comment;
    @Output() savedComment: EventEmitter<Comment> = new EventEmitter();
    err: any;

    constructor(private commentService: CommentsService) {
    }

    save() {
        this.commentService.save(this.comment)
            .then(() => {
                this.savedComment.emit(this.comment);
            })
            .catch((err) => {
                this.err = err;
                console.log("ERR: ", err);
            })
    }

}
