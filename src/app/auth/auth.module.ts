import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from "./auth.component";
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
