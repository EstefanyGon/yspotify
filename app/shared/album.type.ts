import { Artist } from './artist.type'
import { Track } from './track.type'

export class Album {
   album_type:string;
   artists:Artist[];
   available_markets:(string|string)[];
   copyrights:{text:string; type:string}[];
   external_ids:{upc:string};
   external_urls:{spotify:string};
   genres:string[];
   href:string;
   id:string;
   images:({height:number; url:string; width:number}|{height:number; url:string; width:number}|{height:number; url:string; width:number})[];
   label:string;
   name:string;
   popularity:number;
   release_date:string;
   release_date_precision:string;
   tracks:{href:string; items:Track[]; limit:number; next:any; offset:number; previous:any; total:number};
   type:string;
   uri:string
}