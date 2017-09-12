
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//separar los del sistema de los q se agregan
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { SearchComponent } from "./search/search.component";
import { ArtistComponent } from "./artist/artist.component";
import { AlbumComponent } from "./album/album.component";
import { PopularityComponent } from "./shared/popularity.component";

//pipes
import { msToTimePipe } from "./shared/ms-to-time.pipe";

//servicio
import { SpotifyService } from "./shared/spotify.service";

//rutas
import { AppRoutesModule } from './app.routes';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutesModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        SearchComponent,
        ArtistComponent,
        AlbumComponent,
        PopularityComponent,
        msToTimePipe
    ],
    providers: [
        SpotifyService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}