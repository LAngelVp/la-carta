import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BebidasInterface } from '../../models/products-model';

@Component({
  selector: 'app-bebidas',
  imports: [
    CommonModule
  ],
  templateUrl: './bebidas.html',
  styleUrl: './bebidas.css'
})
export class Bebidas {
  @Input() productos: BebidasInterface[] = [];
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
