import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { PostsService } from './post.service';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './addpost.component';
import { routing } from './posts.routes';

@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  exports: [
    PostsComponent,
    AddPostComponent
  ],
  providers: [ PostsService ]
})
export class PostsModule { }