import { AuthComponent } from './auth.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  // { path: 'signin', component: SigninComponent }
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signin', component: SigninComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
