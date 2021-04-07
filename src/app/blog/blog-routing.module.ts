import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlogComponent } from './blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { PanelComponent } from './pages/panel/panel.component';

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
        component: PanelComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
