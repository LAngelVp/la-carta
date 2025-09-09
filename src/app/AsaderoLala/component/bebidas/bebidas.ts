import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { BebidasInterface, ComidaInterface } from '../../models/products-model';
import { ModalDetalles } from '../../../modal-detalles/modal-detalles';

@Component({
  selector: 'app-bebidas',
  imports: [
    CommonModule,
    ModalDetalles
  ],
  templateUrl: './bebidas.html',
  styleUrl: './bebidas.css'
})
export class Bebidas {
  productoSeleccionado = signal<BebidasInterface | null>(null);
  modalVisible = signal<boolean>(false);
  @Input() productos: BebidasInterface[] = [];
  
  openModal(producto: BebidasInterface): void {
    this.productoSeleccionado.set(producto);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.productoSeleccionado.set(null);
  }
}
