import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { LogoutComponent } from './logout.component';
import { LogoutRoutingModule } from './logout-routing.module';

@NgModule({
    imports: [SharedModule, LogoutRoutingModule],
    declarations: [
        LogoutComponent
    ]
})
export class LogoutModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
