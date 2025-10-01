import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import 'aos/dist/aos.css';
import * as AOS from 'aos';
import { AosService } from '../../../serviciosGlobales/aos-service';

@Component({
  selector: 'app-cabecera',
  imports: [
    CommonModule
  ],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {
  imgCabecera : string = "/elRinconcito/logosIconos/oceano.jpg"
  logotipo : string = "/elRinconcito/logosIconos/logotipoColor.png"
  urlFacebook : string ="https://www.facebook.com/ElRinconcitoYanga"

}
