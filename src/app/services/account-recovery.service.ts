import { Injectable, Inject } from '@angular/core';
import { ServerConstants } from '../constants/server.constants';
import { RestClient } from './rest-client.service';
import { AccountRecovery } from '../models/account-recovery.model';
@Injectable()
export class AccountRecoveryService {
    constructor(private restClient: RestClient) {

    }
    accountRecoveryByEmail(accountRecovery: AccountRecovery) {
        return this.restClient.post(ServerConstants.ACCOUNT_RECOVERY_PASSWORD_EMAIL, accountRecovery);
    }
    accountRecoveryByUsername(accountRecovery: AccountRecovery) {
        return this.restClient.post(ServerConstants.ACCOUNT_RECOVERY_PASSWORD_USERNAME, accountRecovery);
    }
    AccountRecoveryPasswordResetEmailKey(accountRecovery: AccountRecovery) {
        return this.restClient.post(ServerConstants.ACCOUNT_RECOVERY_PASSWORD_RESET_BY_EMAIL_KEY, accountRecovery);
    }
}
