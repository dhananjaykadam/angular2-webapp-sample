import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';

@NgModule({
    imports: [SharedModule, ResetPasswordRoutingModule],
    declarations: [
        ResetPasswordComponent
    ]
})
export class ResetPasswordModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
