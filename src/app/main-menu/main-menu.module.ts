import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [MainMenuComponent, LoginComponent, PlayComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModelModule,
    FormsModule
  ],
  exports: [MainMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainMenuModule { }
