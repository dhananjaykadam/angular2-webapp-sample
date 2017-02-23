import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [SharedModule, LoginRoutingModule],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
