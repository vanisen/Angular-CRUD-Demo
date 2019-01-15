import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './addpost.component';
import { PostsComponent } from './posts.component';

export const routes:Routes = [
	// { 
	// 	path: 'posts', 
	// 	component: PostsComponent,
	// 	children: [
	// 	    { path: 'new-post', component: AddPostComponent},
	// 	    { path: ':id/edit', component: AddPostComponent}
	// 	]
	// },

	{ path: 'new-post', component: AddPostComponent},
	{ path: 'posts/:id/edit', component: AddPostComponent}
];

export const routing = RouterModule.forRoot(routes);