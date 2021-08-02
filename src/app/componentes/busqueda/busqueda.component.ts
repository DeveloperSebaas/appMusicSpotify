import { Component, OnInit } from '@angular/core';
import { MusicaService } from 'src/app/servicios/musica.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  artistas: any[]= [];
  cargando: boolean;

  constructor(private musicaService: MusicaService) { 
    this.cargando = false;
  }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.cargando = true;
    this.musicaService.getArtistas(termino)
    .subscribe( (data: any ) => {
      console.log(data);
      this.artistas = data;
      this.cargando = false;
    })
  }

}
