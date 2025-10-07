import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../InterfaceGlobales/category.model';

@Component({
  selector: 'app-productos-cards',
  imports: [
    CommonModule
  ],
  templateUrl: './productos-cards.html',
  styleUrl: './productos-cards.css'
})
export class ProductosCards {
  @Input() productosSeleccionados: Category | null = null;
  @Output() modalCerrado = new EventEmitter<void>();
  
  // Variables para el modal de imagen
  showImagePreview = false;
  currentImage: string = '';
  currentImageTitle: string = '';
  imageLoaded = false;
  
  cerrarModal() {
    console.log('🔵 Hijo: Emitiendo señal para cerrar modal');
    this.modalCerrado.emit();
  }

  // Método para abrir la previsualización de imagen
  openImagePreview(imageSrc: string, title: string) {
    this.currentImage = imageSrc;
    this.currentImageTitle = title;
    this.imageLoaded = false;
    this.showImagePreview = true;
  }

  // Cerrar el modal de imagen
  closeImagePreview() {
    this.showImagePreview = false;
    this.currentImage = '';
    this.currentImageTitle = '';
  }

  // Manejar error de carga de imagen
  handleImageError() {
    // Cerrar el modal si la imagen no carga
    this.closeImagePreview();
  }

  // Escuchar tecla ESC para cerrar el modal de imagen
  @HostListener('document:keydown.escape')
  onEscapePressed() {
    if (this.showImagePreview) {
      this.closeImagePreview();
    }
  }
}