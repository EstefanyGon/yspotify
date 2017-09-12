import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import  "rxjs/add/operator/map";

@Injectable()
export class SpotifyService{
    constructor(private _http:Http){
console.log('Se ha creado una instacia del servico de spotify')
    }

    searchMusic(str:string, type = 'artist') {
        
        let headers = new Headers();
        let authToken = 'BQCB3KOi0LBOsvzyYd9gdNYCSdIs4jcPTzA_9pXbuQS6ULwrb41eNojCvN50E1WJZOO0ZPcQUaUWpCJo_S3cueOrj5WcpCMtsrD23BjTababw3K8rZUpu3unjKpyD0QdT4h16pwx9RW7GTnbSqsfyDpbOM4Zg9BXOq7MTdjHP1xWLblsTHQu9PbT-E_g_1S4ZLH4uxuEHsKHGnSr3LXMHiP6AtdWfh43_Sk-TBA8BorOmuTIoCHiTEkBx7XWacezbcYKyiT5bGrPQJ10yIr86qyMPCNIlsZupVp1VuwWqYbNt7jzqBBpC5CPvj2eGWm-ZPcWPg';
        headers.append('Authorization', 'Bearer '+authToken);
        let searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(searchUrl, { headers })
        .map(res => res.json());
        }
     
     getArtist(id:string) {

        let headers = new Headers();
        let authToken = 'BQCB3KOi0LBOsvzyYd9gdNYCSdIs4jcPTzA_9pXbuQS6ULwrb41eNojCvN50E1WJZOO0ZPcQUaUWpCJo_S3cueOrj5WcpCMtsrD23BjTababw3K8rZUpu3unjKpyD0QdT4h16pwx9RW7GTnbSqsfyDpbOM4Zg9BXOq7MTdjHP1xWLblsTHQu9PbT-E_g_1S4ZLH4uxuEHsKHGnSr3LXMHiP6AtdWfh43_Sk-TBA8BorOmuTIoCHiTEkBx7XWacezbcYKyiT5bGrPQJ10yIr86qyMPCNIlsZupVp1VuwWqYbNt7jzqBBpC5CPvj2eGWm-ZPcWPg';
        headers.append('Authorization', 'Bearer '+authToken);
        let artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(artistUrl, { headers })
           .map(res => res.json());
     }
     
     getAlbums(artistId:string) {

        let headers = new Headers();
        let authToken = 'BQCB3KOi0LBOsvzyYd9gdNYCSdIs4jcPTzA_9pXbuQS6ULwrb41eNojCvN50E1WJZOO0ZPcQUaUWpCJo_S3cueOrj5WcpCMtsrD23BjTababw3K8rZUpu3unjKpyD0QdT4h16pwx9RW7GTnbSqsfyDpbOM4Zg9BXOq7MTdjHP1xWLblsTHQu9PbT-E_g_1S4ZLH4uxuEHsKHGnSr3LXMHiP6AtdWfh43_Sk-TBA8BorOmuTIoCHiTEkBx7XWacezbcYKyiT5bGrPQJ10yIr86qyMPCNIlsZupVp1VuwWqYbNt7jzqBBpC5CPvj2eGWm-ZPcWPg';
        headers.append('Authorization', 'Bearer '+authToken);
        let albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this._http.get(albumsUrl, { headers })
           .map(res => res.json());
     }
     
     getAlbum(id:string) {

        let headers = new Headers();
        let authToken = 'BQCB3KOi0LBOsvzyYd9gdNYCSdIs4jcPTzA_9pXbuQS6ULwrb41eNojCvN50E1WJZOO0ZPcQUaUWpCJo_S3cueOrj5WcpCMtsrD23BjTababw3K8rZUpu3unjKpyD0QdT4h16pwx9RW7GTnbSqsfyDpbOM4Zg9BXOq7MTdjHP1xWLblsTHQu9PbT-E_g_1S4ZLH4uxuEHsKHGnSr3LXMHiP6AtdWfh43_Sk-TBA8BorOmuTIoCHiTEkBx7XWacezbcYKyiT5bGrPQJ10yIr86qyMPCNIlsZupVp1VuwWqYbNt7jzqBBpC5CPvj2eGWm-ZPcWPg';
        headers.append('Authorization', 'Bearer '+authToken);
        let albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        return this._http.get(albumUrl, { headers })
           .map(res => res.json());
     }
  }