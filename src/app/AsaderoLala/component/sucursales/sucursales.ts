import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Sucursal {
  id: number;
  localidad: string;
  estado: string;
  direccion_completa: string;
  numero_telefono: number;
  numero_telefono_whatsapp: string;
  ubicacion: string;
}

@Component({
  selector: 'app-sucursales',
  imports: [
    CommonModule
  ],
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css'
})
export class Sucursales {
  titulo: string = "Sucursales";
  imagen_localizacion : string = "/AsaderoLala/imgs/logoAsaderoLala.png"

  sucursales: Sucursal[] = [
    {
      id: 1,
      localidad: "Yanga",
      estado: "Veracruz",
      direccion_completa: 'Avenida 1 #901 en intersección con calle 9 a un costado de refaccionaria Aquiles, CP: 94930.',
      numero_telefono: 2711808108,
      numero_telefono_whatsapp: "+522711808108",
      ubicacion: "https://maps.app.goo.gl/CHDQgkzbWKLyW7Bg6"
    }
  ]

  abrirUbicacion(url: string): void {
    window.open(url, '_blank');
  }
  mandarMensaje(numero_whatsapp: string): void {
    const mensaje = "Quiero realizar una orden desde su pagina web, me gustaría ordenar.../n";
    const urlWhatsapp = `https://wa.me/${numero_whatsapp}?text=${mensaje}`;
    window.open(urlWhatsapp, '_blank', 'noopener,noreferrer');
  }
}
