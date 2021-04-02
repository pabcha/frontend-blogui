import { NgModule } from "@angular/core";
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from "./auth.component";
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
  ],
  imports: [AuthRoutingModule]
})
export class AuthModule {}
