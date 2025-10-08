import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [
    CommonModule
  ],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {
  imgCabecera: string = "/elRinconcito/logosIconos/portada.jpg";
  logotipo: string = "/elRinconcito/logosIconos/logotipoColor.png";
  
  botonesContacto: any = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ElRinconcitoYanga",
      image: "/icons/facebookWhite.svg",
      accion: () => this.redirigir(this.botonesContacto[0].url)
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/522787387082",
      image: "/icons/whatsappWhite.svg",
      accion: () => this.redirigir(this.botonesContacto[1].url)
    },
    {
      name: "Ubicación",
      url: "https://maps.app.goo.gl/zWmeTnLzBzuLgB1t9",
      image: "/icons/UbicacionMundo.svg",
      accion: () => this.redirigir(this.botonesContacto[2].url)
    },
  ];

  // Función única que reutiliza las URLs del JSON
  redirigir(url: string) {
    window.open(url, '_blank');
  }

  // Función general para manejar clics
  manejarClic(boton: any) {
    if (boton.accion) {
      boton.accion();
    } else if (boton.url) {
      this.redirigir(boton.url);
    }
  }
}
