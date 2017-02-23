import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PageNotFoundComponent } from './notfound.component';
import { PageNotFoundRoutingModule } from './notfound-routing.module';

@NgModule({
    imports: [SharedModule, PageNotFoundRoutingModule],
    declarations: [
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
