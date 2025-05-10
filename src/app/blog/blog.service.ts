import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// WordPress記事の型（必要なフィールドだけ定義）
export interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string; };
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://miro-base.com/blog/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }
  getPostBySlug(slug: string): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}?slug=${slug}`);
  }


}
