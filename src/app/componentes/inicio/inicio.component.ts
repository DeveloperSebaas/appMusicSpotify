import { Component, OnInit } from '@angular/core';
import { MusicaService } from 'src/app/servicios/musica.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nuevasCanciones: any[] = [];
  cargando: boolean;
  mensajeError: string;
  error: boolean;

  constructor(private musicaService: MusicaService ) { 
    this.cargando = true;
    this.mensajeError = '';
    this.error = false;

    this.musicaService.getNewReleases().subscribe( (data: any) =>{
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
      this.cargando = false;
    }, (errorServicio) => {
      this.cargando = false;
      this.error = true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.message;      
    });

  }

  ngOnInit(): void {
  }

}
