// import { Component, OnInit } from '@angular/core';
// import { BlogPostService } from '../services/blog-post.service';
// import { BlogPost } from '../model/blog-post.model';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-blogpost-list',
//   templateUrl: './blogpost-list.component.html',
//   styleUrl: './blogpost-list.component.css'
// })
// export class BlogpostListComponent implements OnInit {

//   blogPosts$?: Observable<BlogPost[]>;

//   constructor(private blogPostService: BlogPostService) {

//   }
//   ngOnInit(): void {
//     // get all blog posts from API
//     this.blogPosts$ = this.blogPostService.getAllBlogPosts();
//   }

// }
import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../model/blog-post.model';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogPosts$?: Observable<BlogPost[]>;
  dataSource: MatTableDataSource<BlogPost>;
  displayedColumns: string[] = ['title', 'shortDescription', 'isVisible']; // Columns to display in mat-table

  constructor(private blogPostService: BlogPostService) {
    this.dataSource = new MatTableDataSource<BlogPost>();
  }

  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
    this.blogPosts$.subscribe(blogPosts => {
      this.dataSource.data = blogPosts; // Assign data to MatTableDataSource
    });
  }
}
