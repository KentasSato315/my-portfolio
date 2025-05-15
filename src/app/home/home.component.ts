import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost} from '../services/blog.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recentPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  works = [
    {
      imageUrl: 'assets/portfolio.png',
      title: 'ポートフォリオサイト',
      tags: 'Angular / TailwindCSS / GitHub Actions / Xserver',
      link: '/'
    },
    {
      imageUrl: 'assets/sakan-maruyama.png',
      title: '丸山産業株式会社様 HP',
      tags: 'WordPress / デザイン提案',
      link: 'https://sakan-maruyama.co.jp/'
    },
  ];

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((posts) => {
      this.recentPosts = posts.slice(0, 3);
    });
  }
}
