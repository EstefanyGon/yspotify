import {Component} from "@angular/core";
import { SpotifyService } from "./shared/spotify.service";

@Component ({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})

export class AppComponent {

    pageTitle: string= 'My angular Nyala'

    constructor(public spotifyService:SpotifyService){}
}