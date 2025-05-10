import { Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { HomeComponent} from "./home/home.component";
import { WorksDetailComponent } from "./works/works-detail/works-detail.component";
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent} from "./blog/blog-detail/blog-detail.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'works/:id', component: WorksDetailComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
];
