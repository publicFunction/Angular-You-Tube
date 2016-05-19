import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {AppComponent} from "../app.component";

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: AppComponent
    },
    {
        path: '/playlists',
        name: 'Playlists',
        component: AppComponent
    }
])

export class Routes { }