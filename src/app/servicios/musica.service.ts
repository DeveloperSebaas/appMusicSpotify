import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private http: HttpClient) {
    console.log('Se inicia el servicio MusicaService');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBEbesi5XlxE4vtFCZTi3HarmgHvo9XRGUf4XiJKSl6SUo0KvXyI3R2jzFcj7ipkIei9DFbAMKpGsoudOg'
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map( data => data['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`)
  }
  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }
}
