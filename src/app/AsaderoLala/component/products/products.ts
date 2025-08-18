import { Component, Input } from '@angular/core';
import { ComidaInterface } from '../../models/products-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  @Input() productos: ComidaInterface[] = [];
  modalOpen: boolean = false;
  selectedProducto: any = null;
  imagenAmpliada: string | null = null;
  
  openModal(producto: any) {
    console.log(this.productos);
    this.selectedProducto = producto;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProducto = null;
  }
  verImagen(imagen: string): void {
  this.imagenAmpliada = imagen;
}

cerrarImagen(): void {
  this.imagenAmpliada = null;
}
}
