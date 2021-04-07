import { BlogComponent } from './blog.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from './pages/home/home.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './pages/home/components/post-card/post-card.component';
import { PostListComponent } from './pages/home/components/post-list/post-list.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoriesNavComponent } from './pages/home/components/categories-nav/categories-nav.component';
import { PanelComponent } from './pages/panel/panel.component';

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
    PanelComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule {}
