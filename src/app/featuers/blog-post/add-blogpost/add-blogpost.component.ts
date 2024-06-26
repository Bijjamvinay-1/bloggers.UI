import { Component } from '@angular/core';
import { AddBlogPost } from '../model/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrl: './add-blogpost.component.css'
})
export class AddBlogpostComponent {

  model: AddBlogPost;
  

  constructor(private blogPostService: BlogPostService,
    private router: Router) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date()
    }
  }
  onFormSubmit():void{
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next:(response) =>{
        this.router.navigateByUrl('/admin/blogposts')
      }
    })
  }
} 


