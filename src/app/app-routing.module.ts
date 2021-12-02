import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { GameLobbyComponent } from './game-pages/game-lobby/game-lobby.component';
import { GameQuizComponent } from './game-pages/game-quiz/game-quiz.component';
import { LoginComponent } from './main-menu/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayComponent } from './main-menu/play/play.component';
import { RegistrationComponent } from './main-menu/registration/registration.component';
import { CreatorComponent } from './user-page/creator/creator.component';
import { HostGameComponent } from './user-page/hosting/host-game/host-game.component';
import { HostingComponent } from './user-page/hosting/hosting.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ToplistComponent } from './game-pages/toplist/toplist.component';

const routes: Routes = [
  { path: '', redirectTo: 'start/registration', pathMatch: 'full' },
  {
    path: "start", component: MainMenuComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'play', component: PlayComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: "admin", component: UserPageComponent, canActivate: [AuthGuard] },
  { path: "creator/:mode", component: CreatorComponent, canActivate: [AuthGuard] },
  { path: "creator/:mode/:id", component: CreatorComponent, canActivate: [AuthGuard] },
  { path: "host/:id", component: HostingComponent, canActivate: [AuthGuard] },
  { path: "hostgame/:id", component: HostGameComponent, canActivate: [AuthGuard] },
  { path: "lobby", component: GameLobbyComponent },
  { path: "toplist", component: ToplistComponent },
  { path: "game", component: GameQuizComponent },
  { path: "**", redirectTo: "start/registration" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
