import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { GamesPageComponent } from "./games.component";
import { HomePageComponent } from "./home.component";
import { NavbarComponent } from "./navbar.component";
import { UserPageComponent } from "./user-page.component";

@NgModule({
    declarations: [
        NavbarComponent,
        UserPageComponent,
        HomePageComponent,
        GamesPageComponent
    ],
    imports: [
        ModelModule,
        RouterModule
    ],
    exports: [NavbarComponent,
        UserPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserPageModule {
}