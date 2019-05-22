import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistsComponent } from './wishlists/wishlists.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signUp', component: RegisterComponent},
  {path: 'wishlists', component: WishlistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
