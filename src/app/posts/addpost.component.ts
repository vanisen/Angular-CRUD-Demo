import { Component, OnInit } from '@angular/core';
import { PostsService } from './post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: 'addpost.component.html'
})
export class AddPostComponent implements OnInit {
	routeSubscription;

	constructor(private postService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.routeSubscription = this.activatedRoute.queryParams.subscribe(params => {
            console.log(params);
        });
	}

	addNewPost(newPost){
		this.postService.createPost(newPost)
			.subscribe(res => {
				this.router.navigate(['/posts']);
			});
	}
}