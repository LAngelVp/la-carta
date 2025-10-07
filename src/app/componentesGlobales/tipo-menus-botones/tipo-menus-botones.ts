import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ProductsMenu } from '../../rinconcito/services/products-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipo-menus-botones',
  imports: [
    CommonModule
  ],
  templateUrl: './tipo-menus-botones.html',
  styleUrl: './tipo-menus-botones.css'
})
export class TipoMenusBotones {
  @Input() botones: string[] = []; // Especifica el tipo
  @Output() botonSeleccionado = new EventEmitter<string>(); // Correcto

  obtenerNombreBoton(nombre: string) {
    this.botonSeleccionado.emit(nombre); // Emitir el evento
  }
}
