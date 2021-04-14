import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './../services/auth.guard';

import { BlogComponent } from './blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { PanelComponent } from './pages/panel/panel.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ViewPostComponent } from "./pages/view-post/view-post.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'post/:slug',
        component: ArticleComponent
      },
      {
        path: 'panel',
        component: PanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'panel/posts/new',
        component: NewPostComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'panel/posts/view/:slug',
        component: ViewPostComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
