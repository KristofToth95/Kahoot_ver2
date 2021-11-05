import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuModule } from './main-menu/main-menu.module';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserPageModule } from './user-page/user-page.module';
import { ModelModule } from './model/model.module';
import { RouterModule } from '@angular/router';
import { SignalRService } from './signal-r.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { GameLobbyComponent } from './game-pages/game-lobby/game-lobby.component';
import { GamePageModule } from './game-pages/game-pages.module';
import { AdminDataSource } from './model/admin-model/admin.datasource';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GameLobbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainMenuModule,
    UserPageModule,
    ModelModule,
    GamePageModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    SignalRService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: SignalRService) =>() =>signalrService.initiateSignalrConnection(),
      deps: [SignalRService],
      multi: true
    },
    AdminDataSource, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
