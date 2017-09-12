import { Artist } from './artist.type'

export class Track {
   artists: Artist[];
   available_markets:(string|string)[];
   disc_number:number;
   duration_ms:number;
   explicit:boolean;
   external_urls:{spotify:string};
   href:string;
   id:string;
   name:string;
   preview_url:string;
   track_number:number;
   type:string;
   uri:string
}