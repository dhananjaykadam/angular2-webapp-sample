import { Injectable, Inject } from '@angular/core';
import { ServerConstants } from '../constants/server.constants';
import { RestClient } from './rest-client.service';
import { RegistrationRequest } from '../models/registration-request.model';
@Injectable()
export class RegistrationRequestService {
    constructor(private restClient: RestClient) {

    }
    save(registrationRequest: RegistrationRequest) {
        return this.restClient.post(ServerConstants.REGISTRATION_REQUESTS, registrationRequest);
    }
}
