import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main-menu/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayComponent } from './main-menu/play/play.component';
import { RegistrationComponent } from './main-menu/registration/registration.component';
import { CreatorComponent } from './user-page/creator/creator.component';
import { HostingComponent } from './user-page/hosting/hosting.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: "start", component: MainMenuComponent,
    children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'play', component: PlayComponent}
    ] },
  { path: "admin", component: UserPageComponent },
  { path: "creator/:mode", component: CreatorComponent },
  { path: "creator/:mode/:id", component: CreatorComponent },
  { path: "host/:id", component: HostingComponent },
  { path: "**", redirectTo: "start" }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
