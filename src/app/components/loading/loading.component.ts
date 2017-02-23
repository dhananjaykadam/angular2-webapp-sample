// Exact copy except import UserService from core
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

import { RestClient } from '../../services/rest-client.service';
@Component({
    selector: 'loading',
    templateUrl: 'loading.component.html'
})
export class LoadingComponent implements OnInit {
  
    constructor(){
    }
    ngOnInit() {
       
    }
   
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
