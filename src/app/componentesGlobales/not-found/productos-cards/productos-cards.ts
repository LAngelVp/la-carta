import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { Category } from '../../../InterfaceGlobales/category.model';
import { CommonModule } from '@angular/common';

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
  
  cerrarModal() {
    console.log('🔵 Hijo: Emitiendo señal para cerrar modal');
    this.modalCerrado.emit();
  }
}
