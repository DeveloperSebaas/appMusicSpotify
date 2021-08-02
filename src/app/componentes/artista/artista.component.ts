import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicaService } from 'src/app/servicios/musica.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  cargando: boolean;
  artista: any = {};
  topTracks: any[] = [];


  constructor(private router: ActivatedRoute, 
              private musicaService: MusicaService) {
    this.cargando = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
   }

  ngOnInit(): void {
  }
  getArtista(id: string){
    this.cargando = true;
    this.musicaService.getArtista(id)
    .subscribe(artista =>{
      console.log(artista);
      this.artista = artista;
      this.cargando = false;
    })
  }

  getTopTracks(id: string){
    this.musicaService.getTopTracks(id)
    .subscribe(tracks =>{
      console.log(tracks);
      this.topTracks = tracks;
      this.cargando = false;
    })
  }

}
