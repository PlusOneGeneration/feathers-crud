import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts/posts.component';
import {PostsService} from "./posts.service";
import {PostFormComponent} from './post-form/post-form.component';
import {FormsModule} from "@angular/forms";
import {PostResolver} from "./post.resolver";
import { PostComponent } from './post/post.component';
import {CommentsModule} from "../comments/comments.module";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PostsRoutingModule,
        CommentsModule
    ],
    declarations: [
        PostsComponent,
        PostFormComponent,
        PostComponent,
    ],
    providers: [
        PostsService,
        PostResolver]
})
export class PostsModule {
}
