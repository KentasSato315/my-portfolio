import { Injectable } from '@angular/core';
import {Work} from "./work.model";

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private works: Work[] = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      imageUrl: 'https://placehold.co/600x400',
      tags: 'Angular / TailwindCSS / Firebase',
      description: '自分の世界観を表現するポートフォリオサイトです。',
    },
    {
      id: 2,
      title: 'ショッピングリストアプリ',
      imageUrl: 'https://placehold.co/600x400',
      tags: 'Vue.js / Node.js / MongoDB',
      description: '家族で共有できるシンプルなショッピングメモ。',
    },
    {
      id: 3,
      title: 'タスク管理ツール',
      imageUrl: 'https://placehold.co/600x400',
      tags: 'React / Next.js',
      description: 'チーム開発向けのタスク管理アプリケーションです。',
    }
  ];
  getWorks(): Work[] {
    return this.works;
  }

  getWorkById(id: number): Work | undefined {
    return this.works.find((work) => work.id === id);
  }
}
