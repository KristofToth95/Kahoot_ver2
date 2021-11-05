import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./shared/rest.datasource";
import { AuthService } from "./shared/auth.service";
import { Model } from "./admin-model/repository.model";
import { UserModel } from "./user-model/user-repository.model";
@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthService,
        UserModel,
        Model
    ]
})
export class ModelModule { }