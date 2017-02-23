
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';
import { RestClient } from './rest-client.service';


import { RegistrationRequestService } from './registration-request.service';
import { AccountRecoveryService } from './account-recovery.service';

import { UserService } from './user.service';
@NgModule({
    imports: [],
    declarations: [

    ],
    providers: [
        LoginService, RestClient, AccountRecoveryService,
       RegistrationRequestService,  UserService
    ]
})
export class ServicesModule {

}
