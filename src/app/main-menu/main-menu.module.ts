import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModelModule
  ],
  exports: [MainMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainMenuModule { }
