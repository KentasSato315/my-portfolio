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
      imageUrl: 'assets/portfolio.png',
      title: 'ポートフォリオサイト',
      tags: 'Angular / TailwindCSS / GitHub Actions / Xserver',
      link: '/'
    },
    {
      id: '2',
      imageUrl: 'assets/sakan-maruyama.png',
      title: '丸山産業株式会社様 HP',
      tags: 'WordPress / デザイン提案',
      link: 'https://sakan-maruyama.co.jp/'
    },
  ];
}
