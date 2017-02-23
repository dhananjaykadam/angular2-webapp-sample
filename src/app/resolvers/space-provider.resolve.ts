// import { Injectable } from '@angular/core';
// import {
//     Router, Resolve,
//     ActivatedRouteSnapshot
// } from '@angular/router';


// @Injectable()
// export class SpaceProviderResolve implements Resolve<any>{
//     constructor(private spaceProviderService: SpaceProviderService, private router: Router) { }
//     resolve(route: ActivatedRouteSnapshot): Promise<any> {
//         let id = route.parent.params['id'];
//         return this.spaceProviderService.getSpaceProviderForSpaceId(id).then(response => {
//             if (response) {
//                 return response.json();
//             } else {
//                 this.router.navigate(['/page-not-found']);
//                 return false;
//             }
//         });
//     }
// }
