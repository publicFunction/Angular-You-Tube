import { Component, OnInit } from '@angular/core';
//import { Playlists} from './playlist/playlists.component';
import { PlaylistsService } from '/app/services/playlists.service';

@Component({
	selector : 'my-app',
    providers: [PlaylistsService]
	templateUrl : '/templates/home.html'
})


export class AppComponent implements OnInit {

    constructor(private playlistService: PlaylistsService) { }

    title = "{ publicFunction }";
	//heroes : PlaylistsService.getPlaylists();

}


