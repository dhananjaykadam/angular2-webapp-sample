import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

@NgModule({
    imports: [SharedModule, ForgotPasswordRoutingModule],
    declarations: [
        ForgotPasswordComponent
    ]
})
export class ForgotPasswordModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
