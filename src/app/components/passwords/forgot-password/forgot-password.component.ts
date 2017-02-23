// Exact copy except import UserService from core
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AccountRecovery } from '../../../models/account-recovery.model';
import { Dialogs } from '../../../other/dialogs';
import { AccountRecoveryService } from '../../../services/account-recovery.service';
@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.component.html'
})
export class ForgotPasswordComponent {
    accountRecovery: AccountRecovery;
    requestSubmitted: boolean;
    constructor(private accountRecoveryService: AccountRecoveryService) {
        this.accountRecovery = new AccountRecovery();
        this.requestSubmitted = false;
    }

    recover() {
        this.accountRecoveryService.accountRecoveryByEmail(this.accountRecovery)
            .then((response) => this.handleSuccess(response))
            .catch((err) => this.handleError(err));
    }
    handleSuccess(response) {
        this.requestSubmitted = true;
        Dialogs.toast("You will be receiving email with password recovery link to : " + this.accountRecovery.email, 4000);
    }
    handleError(err) {
        Dialogs.toast("We are unable to find the account with the given email", 4000);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
