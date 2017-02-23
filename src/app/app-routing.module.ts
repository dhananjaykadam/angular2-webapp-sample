import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
    {
        path: 'loading', loadChildren: 'app/components/loading/loading.module#LoadingModule', resolve: {
           
        }
    },
    { path: 'logout', loadChildren: 'app/components/logout/logout.module#LogoutModule' },
    { path: 'homepage', loadChildren: 'app/components/homepage/homepage.module#HomepageModule' },
    {
        path: 'dashboard/:id', loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule', resolve: {
           
        }
    },
    { path: 'registration', loadChildren: 'app/components/registration/registration.module#RegistrationModule' },
    { path: 'reset-password/:secureKey', loadChildren: 'app/components/passwords/reset-password/reset-password.module#ResetPasswordModule' },
    { path: 'forgot-password', loadChildren: 'app/components/passwords/forgot-password/forgot-password.module#ForgotPasswordModule' },
    { path: 'not-found', loadChildren: 'app/components/notfound/notfound.module#PageNotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
