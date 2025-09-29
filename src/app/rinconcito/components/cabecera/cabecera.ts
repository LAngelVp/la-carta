import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import 'aos/dist/aos.css';
import * as AOS from 'aos';

@Component({
  selector: 'app-cabecera',
  imports: [
    CommonModule
  ],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera implements OnInit {
  imgCabecera : string = "/elRinconcito/logosIconos/oceano.jpg"
  logotipo : string = "/elRinconcito/logosIconos/logotipoColor.png"
  urlFacebook : string ="https://www.facebook.com/ElRinconcitoYanga"

  ngOnInit() {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      easing: 'ease-in-out', // tipo de easing
      once: true, // si la animación solo ocurre una vez
      offset: 100 // offset (en px) desde el elemento original
    });
  }
}
