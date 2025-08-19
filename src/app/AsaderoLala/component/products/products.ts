import { Component, Input, signal } from '@angular/core';
import { ComidaInterface } from '../../models/products-model';
import { CommonModule } from '@angular/common';
import { ModalDetalles } from '../../../modal-detalles/modal-detalles';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    ModalDetalles
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productoSeleccionado = signal<ComidaInterface | null>(null);
  modalVisible = signal<boolean>(false);
  @Input() productos: ComidaInterface[] = [];
  
  openModal(producto: ComidaInterface): void {
    this.productoSeleccionado.set(producto);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.productoSeleccionado.set(null);
  }
}
