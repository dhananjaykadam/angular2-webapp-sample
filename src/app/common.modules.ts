import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { HttpModule } from '@angular/http';
import { ResolveModule } from './resolvers/resolve.module';
@NgModule({
    imports: [
        ServicesModule, HttpModule, ResolveModule
    ],
    declarations: [

    ],
    providers: [

    ]
})
export class CommonModules {

}
