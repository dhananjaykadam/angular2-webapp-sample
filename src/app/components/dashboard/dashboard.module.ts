import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModalModule } from "ng2-modal";
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
        DashboardRoutingModule, ModalModule, SharedModule
    ],
    declarations: [DashboardComponent],
})
export class DashboardModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
