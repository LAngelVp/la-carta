import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  imports: [
    CommonModule
  ],
  templateUrl: './portada.html',
  styleUrl: './portada.css'
})
export class Portada {
  imagen_portada : string= "/AsaderoLala/imgs/asadorPollos.png";
  titulo_del_negocio : string= "asadero doña lala";
}
