import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
    {
      imageUrl: 'https://placehold.co/300x200',
      title: 'タスク管理ツール',
      tags: 'React / Next.js'
    }
  ];

  blogPosts = [
    {
      title: '技術ブログはじめました！',
      excerpt: 'AngularとTailwindでポートフォリオを作ってみた記録です。',
      date: '2024-04-01'
    },
    {
      title: 'スローペースでエンジニア生活を楽しむ方法',
      excerpt: '子育てや日常も大切にしながら、開発と向き合うスタイル。',
      date: '2024-04-10'
    }
  ];
}
