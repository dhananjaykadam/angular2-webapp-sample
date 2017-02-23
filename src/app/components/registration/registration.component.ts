// Exact copy except import UserService from core
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { RegistrationRequest } from '../../models/registration-request.model';
import { RegistrationRequestService } from '../../services/registration-request.service';
import { Dialogs } from '../../other/dialogs';
@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {
    registrationRequest: RegistrationRequest;
    requestSubmitted: boolean;
    constructor(private route: ActivatedRoute, private registrationService: RegistrationRequestService) {
        this.registrationRequest = new RegistrationRequest();
        this.registrationRequest.registrationRequestType = "PROPERTY_REGISTRATION_REQUEST";
        this.requestSubmitted = false;
    }
    save() {
        this.registrationService.save(this.registrationRequest)
            .then((response) => this.handleSuccess(response.json()))
            .catch((err) => this.handleErr(err));
    }
    handleSuccess(response) {
        this.requestSubmitted = true;
        Dialogs.toast("Your request has been recorded, we will be getting in touch with you!", 9000);
    }
    handleErr(err) {
        console.log(err);
    }
    cancel() {
        console.log("Cancelled by user");
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
