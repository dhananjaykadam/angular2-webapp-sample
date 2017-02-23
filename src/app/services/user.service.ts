import { Injectable, Inject } from '@angular/core';
import { ServerConstants } from '../constants/server.constants';
import { RestClient } from './rest-client.service';


@Injectable()
export class UserService {
    constructor(private restClient: RestClient) {

    }
    isHotelAdmin() {
        return this.restClient.get(ServerConstants.USER_ACTIONS + "ishoteladmin");
    }
}
