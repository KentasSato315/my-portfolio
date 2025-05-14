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
      imageUrl: 'https://placehold.co/300x200',
      title: 'ポートフォリオサイト',
      tags: 'Angular / TailwindCSS / Firebase'
    },
    {
      imageUrl: 'https://placehold.co/300x200',
      title: 'ショッピングリストアプリ',
      tags: 'Vue.js / Node.js / MongoDB'
    },
  ];

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((posts) => {
      this.recentPosts = posts.slice(0, 3);
    });
  }
}
