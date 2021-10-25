import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { Model } from "./repository.model";
@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        RestDataSource,
        AuthService,
        Model
    ]
})
export class ModelModule { }