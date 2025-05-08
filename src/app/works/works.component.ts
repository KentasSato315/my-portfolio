import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  works = [
    {
      id: '1',
      imageUrl: 'https://placehold.co/300x200',
      title: 'ポートフォリオサイト',
      tags: 'Angular / TailwindCSS / Firebase'
    },
    {
      id: '2',
      imageUrl: 'https://placehold.co/300x200',
      title: 'ショッピングリストアプリ',
      tags: 'Vue.js / Node.js / MongoDB'
    },
    {
      id: '3',
      imageUrl: 'https://placehold.co/300x200',
      title: 'タスク管理ツール',
      tags: 'React / Next.js'
    }
  ];
}
