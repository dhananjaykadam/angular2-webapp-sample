import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { LoadingComponent } from './loading.component';
import { LoadingRoutingModule } from './loading-routing.module';

@NgModule({
    imports: [SharedModule, LoadingRoutingModule],
    declarations: [
        LoadingComponent
    ]
})
export class LoadingModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
