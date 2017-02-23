import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
    imports: [SharedModule, RegistrationRoutingModule],
    declarations: [
        RegistrationComponent
    ]
})
export class RegistrationModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
