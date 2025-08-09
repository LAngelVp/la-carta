import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsModel } from './AsaderoLala/models/products-model';
import { ProductServices } from './AsaderoLala/services/product-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('LaCarta');

  productos: ProductsModel[] = [];

  constructor(private productServices : ProductServices){}

  ngOnInit(): void {
      this.productos = this.productServices.get_producto();
  }
}
