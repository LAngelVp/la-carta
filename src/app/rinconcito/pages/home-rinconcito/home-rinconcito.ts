import { Component, inject, signal, Signal } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { CommonModule } from '@angular/common';
import { Cabecera } from "../../components/cabecera/cabecera";
import { ProductsMenu } from '../../services/products-menu';
import { Category } from '../../models/category.model';
import { toSignal } from '@angular/core/rxjs-interop';

interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-home-rinconcito',
  imports: [
    Carousel,
    CommonModule,
    Cabecera
],
  templateUrl: './home-rinconcito.html',
  styleUrl: './home-rinconcito.css'
})
export class HomeRinconcito {
  title = 'my-carousel-app';
  tituloEspecialidades : string = "especialidades del menú";
  private productosServicio = inject(ProductsMenu);
  especialidades = signal<Category[]>([]);

  constructor() {
    this.obtenerEspecialidadesServicio();
  }

  obtenerEspecialidadesServicio() {
    try {
      const data = this.productosServicio.getEspecialidades();
      
      if (data) {
        // Si encontramos la categoría, la convertimos a array
        this.especialidades.set([data]);
      } else {
        // Si no se encuentra, array vacío
        this.especialidades.set([]);
        console.warn('No se encontró la categoría "Lo Imperdible"');
      }
    } catch (error) {
      console.error('Error obteniendo especialidades:', error);
      this.especialidades.set([]);
    }
  }
}
