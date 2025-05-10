import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../blog.service';
import { RouterModule} from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id');
    if (slug) {
      this.sub = this.blogService.getPostBySlug(slug).subscribe((data) => {
        this.post = data[0];
      });
    }
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
