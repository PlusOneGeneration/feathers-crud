import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {postsRoutes} from "./posts/posts-routing.module";
import {authRoutes} from "./auth/auth-routing.module";
import {UserResolver} from "./auth/user.resolver";


const routes: Routes = [
    {path: '', redirectTo: 'app/posts', pathMatch: 'full'},
    ...authRoutes,
    {
        path: 'app',
        children: [
            ...postsRoutes
        ],
        resolve: {
            user: UserResolver
        }
    },

    // {path: '**', redirectTo: 'app/posts', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}