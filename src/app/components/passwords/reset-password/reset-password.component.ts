
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AccountRecovery } from '../../../models/account-recovery.model';
import { Dialogs } from '../../../other/dialogs';
import { AccountRecoveryService } from '../../../services/account-recovery.service';

@Component({
    selector: 'reset-password',
    templateUrl: 'reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    accountRecovery: AccountRecovery;
    constructor(private accountRecoveryService: AccountRecoveryService, private route: ActivatedRoute, private router: Router) {
        this.accountRecovery = new AccountRecovery();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.accountRecovery.secureKey = params["secureKey"];
        });
        console.log(this.accountRecovery);
    }
    recover() {
        this.accountRecoveryService.AccountRecoveryPasswordResetEmailKey(this.accountRecovery)
            .then((response) => this.handleSuccess(response))
            .catch((err) => this.handleError(err));
    }
    handleSuccess(response) {
        Dialogs.toast("Password has been updated!", 4000);
    }
    handleError(err) {
        Dialogs.toast("Unable to update Password, Try again!", 4000);
        console.error(err);
    }
}
