import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Category } from '../../../InterfaceGlobales/category.model';
import { CommonModule } from '@angular/common';
import { AnimacionesGlobales } from '../../../serviciosGlobales/animaciones-globales';
import { ProductosCards } from '../../../componentesGlobales/productos-cards/productos-cards';

@Component({
  selector: 'app-menu-categories',
  imports: [
    CommonModule,
    ProductosCards,
],
  templateUrl: './menu-categories.html',
  styleUrl: './menu-categories.css'
})
export class MenuCategories {
  @Input() categorias: Category[] = [];
  @Input() titulo: string = 'Categorías';
  mostrarModal = false;
  
  categoriaSeleccionada: Category | null = null;

  constructor(
    private animacionesNativas: AnimacionesGlobales,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngAfterViewInit(): void {
    this.animacionesNativas.initScrollAnimations({
      threshold: 0.1,
      rootMargin: '0px',
      once: true
    });

    // Animación inicial para elementos visibles
    setTimeout(() => {
      this.animacionesNativas.refresh();
    }, 100);
  }

  onCategoriaClick(categoria: Category ) {
    this.categoriaSeleccionada = categoria;
  }

  abrirModal(categoria: any) {
    this.categoriaSeleccionada = categoria;
    this.mostrarModal = true;
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
  }

  onModalCerrado() {
    console.log('🟠 Padre: Señal recibida del hijo, cerrando modal');
    this.mostrarModal = false;
    this.categoriaSeleccionada = null;
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }
}
