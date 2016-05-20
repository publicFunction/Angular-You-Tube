import { Injectable } from '@angular/core';
import { PLAYLISTS } from '/app/services/mocks/mock-playlists';


@Injectable()
export class PlaylistsService {

    getPlaylists()  {
        return PLAYLISTS;
    }

}