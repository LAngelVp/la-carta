import { Component } from '@angular/core';
import { ProductServices } from '../../services/product-services';
import { ProductsModel } from '../../models/products-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../products/products';
import { ProductosFiltrados } from '../productos-filtrados/productos-filtrados';
import { Bebidas } from "../bebidas/bebidas";

@Component({
  selector: 'app-botones-menu',
  imports: [
    Products,
    ProductosFiltrados,
    CommonModule,
    FormsModule,
    Bebidas
],
  templateUrl: './botones-menu.html',
  styleUrl: './botones-menu.css'
})
export class BotonesMenu {
  dato_a_buscar: string = '';
  categoriaActual: string = '';
  productos: any[] = [];
  productos_filtrados: any[] = [];

  constructor (private productosServicio: ProductServices) {}

  mostrarProductos(categoria: keyof ProductsModel): void {
    this.productosServicio.mostrarProductos(categoria).subscribe((productos) => {
      console.log('Productos de', categoria, productos);
      this.productos_filtrados = [];
      this.productos = productos;
      this.categoriaActual = categoria;
    });
  }

  buscarProducto(): void {
    if (this.dato_a_buscar.trim() !== '') {
      this.productosServicio.buscar_producto(this.dato_a_buscar).subscribe((productos) => {
        this.productos = [];
        this.productos_filtrados = productos;
        console.log(this.productos_filtrados)
      });
    } 
  }
}
