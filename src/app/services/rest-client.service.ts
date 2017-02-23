import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { ServerConstants } from '../constants/server.constants';
import { User } from '../models/user.model';
import { Dialogs } from '../other/dialogs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RestClient {
    public static userAuthorisedToUpdate = true;
    private baseRequestOptions = new BaseRequestOptions();
    // headers = new Headers();
    constructor( @Inject(Http) private http: Http, private router: Router) {
        let auth = localStorage.getItem("Authorization");
        this.baseRequestOptions.headers.set("Authorization", auth);
        this.baseRequestOptions.headers.set("X-Requested-With", "XMLHttpRequest");
    }

    public appendHeaders(key: string, value: string) {
        this.baseRequestOptions.headers.set(key, value);
        localStorage.setItem(key, value);
    }
    public removeHeaders(key: string) {
        this.baseRequestOptions.headers.delete(key);
    }

    public get(url): Promise<Response> {
        return this.http.get(url, this.baseRequestOptions).toPromise()
            .then(response => response)
            .catch(err => this.handleError(err));
    }
    public put(url, data: any) {
        if (!this.userActionAllowedCheck()) {
            return this.returnRejectedPromise();
        }
        return this.http.put(url, data, this.baseRequestOptions).toPromise()
            .then(response => response)
            .catch(err => this.handleError(err));
    }
    public post(url, data: any) {
        if (!this.userActionAllowedCheck()) {
            return this.returnRejectedPromise();
        }
        return this.http.post(url, data, this.baseRequestOptions).toPromise()
            .then(response => response)
            .catch(err => this.handleError(err));
    }
    public delete(url) {
        if (!this.userActionAllowedCheck()) {
            return this.returnRejectedPromise();
        }
        return this.http.delete(url, this.baseRequestOptions).toPromise()
            .then(response => response)
            .catch(err => this.handleError(err));
    }

    private handleError(err: Response) {
        if (err.status == 401) {
            this.router.navigate(['login']);
        }
        return Promise.reject(err);
    }
    userActionAllowedCheck() {
        return RestClient.userAuthorisedToUpdate;
    }
    returnRejectedPromise(): Promise<Response> {
        // Dialogs.toast("You are not authorized to perform this action!", 5000);
        let ro = new ResponseOptions();
        return Promise.reject(new Response(ro));
    }
}
