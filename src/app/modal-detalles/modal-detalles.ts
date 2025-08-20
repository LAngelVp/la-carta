import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ComidaInterface } from '../AsaderoLala/models/products-model';

@Component({
  selector: 'app-modal-detalles',
  imports: [
    CommonModule
  ],
  templateUrl: './modal-detalles.html',
  styleUrl: './modal-detalles.css'
})
export class ModalDetalles {
  @Input() producto: ComidaInterface | null = null;
  @Input() visible: boolean = false;
  @Output() cerrar = new EventEmitter<void>();

  imagenExpandida: boolean = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.imagenExpandida) {
        this.cerrarImagen();
      } else if (this.visible) {
        this.cerrarModal();
      }
    }
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }

  expandirImagen(): void {
    this.imagenExpandida = true;
    // Deshabilitar scroll del body
    document.body.style.overflow = 'hidden';
  }

  cerrarImagen(): void {
    this.imagenExpandida = false;
    // Habilitar scroll del body
    document.body.style.overflow = 'auto';
  }
}
