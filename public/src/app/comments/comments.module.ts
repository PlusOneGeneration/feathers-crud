import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsComponent} from './comments/comments.component';
import {CommentFormComponent} from './comment-form/comment-form.component';
import {FormsModule} from "@angular/forms";
import {CommentsService} from "./comments.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
    ],
    declarations: [
        CommentsComponent,
        CommentFormComponent
    ],
    exports:[
        CommentsComponent,
        CommentFormComponent
    ],
    providers:[
        CommentsService
    ]
})
export class CommentsModule {
}
