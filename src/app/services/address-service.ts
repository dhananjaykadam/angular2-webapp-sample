import { Injectable, Inject } from '@angular/core';
import { ServerConstants } from '../constants/server.constants';
import { RestClient } from './rest-client.service';

@Injectable()
export class AddresService {
    constructor(private restClient: RestClient) {

    }
    getAllCities() {
        return this.restClient.get(ServerConstants.ADDRESS + "/city/all");
    }
}
