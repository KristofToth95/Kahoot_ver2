import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [MainMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainMenuModule { }
