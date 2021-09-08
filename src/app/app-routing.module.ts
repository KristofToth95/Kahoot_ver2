import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GamesPageComponent } from './user-page/games.component';
import { HomePageComponent } from './user-page/home.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: "start", component: MainMenuComponent },
  { path: "admin", component: UserPageComponent,
    children: [
      {path: "home", component: HomePageComponent},
      {path: "games", component: GamesPageComponent}
    ] },
  { path: "**", redirectTo: "start" }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
