import { Injectable } from '@angular/core';
import { PLAYLISTS } from './mocks/mock-playlists';


@Injectable()
export class PlaylistsService {

    getPlaylists()  {
        return PLAYLISTS;
    }

}