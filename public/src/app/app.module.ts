import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PostsModule} from "./posts/posts.module";
import {FeatherService} from "./feather.service";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PostsModule,
    AuthModule
  ],
  providers: [
    FeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
