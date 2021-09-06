import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {path: "start", component: MainMenuComponent},
  {path: "admin", component: UserPageComponent},
  {path: "**", redirectTo: "start"}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
