import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryImage, Instalaciones } from '../instalaciones/instalaciones';

interface Sucursal {
  id: number;
  localidad: string;
  estado: string;
  direccion_completa: string;
  numero_telefono: string;
  numero_telefono_whatsapp: string;
  ubicacion: string;
}

@Component({
  selector: 'app-sucursales',
  imports: [
    CommonModule,
    Instalaciones
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
      numero_telefono: '2711808108',
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

  // Array de imágenes para la galería
  galleryImages: GalleryImage[] = [
    {
      src: '/AsaderoLala/imgs/instalaciones/intslacion1.jpg',
      alt: 'Nuestras modernas instalaciones',
      thumbnail: '/AsaderoLala/imgs/instalaciones/intslacion1.jpg'
    },
    {
      src: '/AsaderoLala/imgs/instalaciones/instalacion2.jpg',
      alt: 'Nuestras modernas instalaciones',
      thumbnail: '/AsaderoLala/imgs/instalaciones/instalacion2.jpg'
    },
    {
      src: '/AsaderoLala/imgs/instalaciones/instalacion3.jpg',
      alt: 'Nuestras modernas instalaciones',
      thumbnail: '/AsaderoLala/imgs/instalaciones/instalacion3.jpg'
    },
    {
      src: '/AsaderoLala/imgs/instalaciones/instalacion4.jpg',
      alt: 'Nuestras modernas instalaciones',
      thumbnail: '/AsaderoLala/imgs/instalaciones/instalacion4.jpg'
    },
    {
      src: '/AsaderoLala/imgs/instalaciones/instalacion5.jpg',
      alt: 'Nuestras modernas instalaciones',
      thumbnail: '/AsaderoLala/imgs/instalaciones/instalacion5.jpg'
    },
  ];

  // Método para manejar el click en las imágenes
  onImageClick(image: GalleryImage) {
    console.log('Imagen clickeada en el padre:', image);
    // Aquí puedes abrir un modal, navegar a otra página, etc.
  }
}
