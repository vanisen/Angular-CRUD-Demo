import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';

const routes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'posts', component: PostsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
   //{ path: '**', component: PageNotFoundComponent }
    // { path: 'about', component: "AboutComponent"},
    // { path: 'posts', component: "PostsComponent"}
];

export const routing = RouterModule.forRoot(routes);