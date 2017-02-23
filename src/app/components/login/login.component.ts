// Exact copy except import UserService from core
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    username: string = null;
    password: string = null;
    err: boolean = false;
    constructor(private loginService: LoginService, private router: Router) {
    }
    public login() {
        this.loginService.login(this.username, this.password)
            .then((data) => this.router.navigate(['loading']))
            .catch(err => this.err = true);
    }
    public onSubmit() {

    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
