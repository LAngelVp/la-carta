import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { CommonModule } from '@angular/common';
import { Cabecera } from "../../components/cabecera/cabecera";
import { ProductsMenu } from '../../services/products-menu';
import { Category } from '../../models/category.model';
import { MenuCategories } from "../../components/menu-categories/menu-categories";

interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-home-rinconcito',
  imports: [
    Carousel,
    CommonModule,
    Cabecera,
    MenuCategories
],
  templateUrl: './home-rinconcito.html',
  styleUrl: './home-rinconcito.css'
})
export class HomeRinconcito {
  title = 'my-carousel-app';
  tituloEspecialidades : string = "Menú del rinconcito";
  private productosServicio = inject(ProductsMenu);
  especialidades = signal<Category[]>([]);
  categorias = signal<Category[]>([]);

  constructor() {
    this.obtenerEspecialidadesServicio();
    this.obtenerProductosCategorias();
  }

  async obtenerProductosCategorias() {
    try {
        const categorias = this.productosServicio.getCategories();
        
        if (categorias && Array.isArray(categorias)) {
          this.categorias.set(categorias);
          console.log('Categorías obtenidas:', this.categorias());
        } else {
          console.log("No se encontraron categorías");
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al obtener las categorías');
      }
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
