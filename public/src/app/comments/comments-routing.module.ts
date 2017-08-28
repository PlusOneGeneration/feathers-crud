import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";

export const commentsRoutes: Routes = [
  // {
  //   path: 'comments',
  //   component: CommentsComponent,
    // children:[
    //   {
    //     path: "create",
    //     component: CommentFormComponent
    //   },
      // {
      //   path: ':commentId/edit',
      //   component: CommentFormComponent,
      //   resolve: {
      //     post: CommentResolver
      //   }
      // }
    // ]
  // },

];

@NgModule({
  exports: [RouterModule],
})
export class CommentsRoutingModule { }
