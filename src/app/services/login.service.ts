import { Injectable, Inject } from '@angular/core';
import { RestClient } from './rest-client.service';
import { ServerConstants } from '../constants/server.constants';

@Injectable()
export class LoginService {
    constructor(private restClient: RestClient) {

    }

    private buildAuthorization(username: string, password: string) {
        return 'Basic ' + btoa(username + ":" + password);
    }

    login(username: string, password: string) {
        this.restClient.appendHeaders("Authorization", this.buildAuthorization(username, password));
        return this.restClient.get(ServerConstants.LOGIN_PROVIDER);
    }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
