import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { CreatorComponent } from "./creator/creator.component";
import { HostGameComponent } from "./hosting/host-game/host-game.component";
import { HostPopupComponent } from "./hosting/host-popup/host-popup.component";
import { HostingComponent } from "./hosting/hosting.component";
import { UserPageComponent } from "./user-page.component";

@NgModule({
    declarations: [
        UserPageComponent,
        CreatorComponent,
        HostingComponent,
        HostPopupComponent,
        HostGameComponent
    ],
    imports: [
        ModelModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    exports: [
        UserPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserPageModule {
}