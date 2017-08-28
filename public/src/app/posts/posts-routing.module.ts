import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostResolver} from "./post.resolver";
import {PostFormComponent} from "./post-form/post-form.component";
import {PostComponent} from "./post/post.component";

export const postsRoutes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: "posts/create",
        component: PostFormComponent
    },
    {
        path: 'posts/:postId/edit',
        component: PostFormComponent,
        resolve: {
            post: PostResolver
        }
    },
    {
        path: 'posts/:postId',
        component: PostComponent,
        resolve: {
            post: PostResolver
        }
    }
];

@NgModule({
    exports: [RouterModule]
})
export class PostsRoutingModule {
}
