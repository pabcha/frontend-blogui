import { BlogComponent } from './blog.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from './pages/home/home.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './pages/home/components/post-card/post-card.component';
import { PostListComponent } from './pages/home/components/post-list/post-list.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule {}
