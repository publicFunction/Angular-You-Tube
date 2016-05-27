import { Component } from '@angular/core';
//import { Playlists} from './playlist/playlists.component';
import { PlaylistsService } from './services/playlists.service';

@Component({
	selector : 'my-app',
    providers: [PlaylistsService],
	templateUrl : '/templates/home.html'
})


export class AppComponent {

    constructor(private playlistService: PlaylistsService) { }

    title = "{ publicFunction }";
	//heroes : PlaylistsService.getPlaylists();

}


