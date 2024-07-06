import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../model/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost) : Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/blogposts?addAuth=true`, data);
  }

  getAllBlogPosts() : Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts?addAuth=true`);
  }
}
