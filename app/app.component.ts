import { Component } from '@angular/core';
import { Playlists } from './playlist/playlists.component';

@Component({
	selector : 'my-app',
	templateUrl : '/templates/home.html'
})

export class AppComponent {

	title = "{ publicFunction }";
	hero : Playlists = {
		id: 1,
		name : "Wind Worth"
	};

}


