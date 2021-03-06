import { CoreModule } from './../core/core.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogComponent } from './blog.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './pages/home/components/post-card/post-card.component';
import { PostListComponent } from './pages/home/components/post-list/post-list.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoriesNavComponent } from './pages/home/components/categories-nav/categories-nav.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PostInlineListComponent } from './pages/panel/components/post-inline-list/post-inline-list.component';
import { PostInlineCardComponent } from './pages/panel/components/post-inline-card/post-inline-card.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    PostCardComponent,
    ArticleComponent,
    CategoriesNavComponent,
    PanelComponent,
    PostInlineListComponent,
    PostInlineCardComponent,
    NewPostComponent,
    ViewPostComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class BlogModule {}
