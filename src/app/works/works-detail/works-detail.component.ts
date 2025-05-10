import { Component, OnInit } from '@angular/core';
import { CommonModule} from "@angular/common";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WorkService} from "../work.service";
import { Work } from '../work.model';

@Component({
  selector: 'app-works-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './works-detail.component.html',
})
export class WorksDetailComponent implements OnInit {
  work: Work | undefined;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.work = this.workService.getWorkById(id);
  }
}
