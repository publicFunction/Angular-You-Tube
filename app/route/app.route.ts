import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {AppComponent} from "../app.component";
import {Playlists} from "../playlist/playlists.component";

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: AppComponent
    },
    {
        path: '/playlists',
        name: 'Playlists',
        component: Playlists
    }
])

export class Routes { }