import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../../models/products-model';
import { ProductServices } from '../../services/product-services';
import { Portada } from "../../component/portada/portada";
import { Sucursales } from "../../component/sucursales/sucursales";

@Component({
  selector: 'app-menu-asadero-lala',
  imports: [Portada, Sucursales],
  templateUrl: './menu-asadero-lala.html',
  styleUrl: './menu-asadero-lala.css'
})
export class MenuAsaderoLala implements OnInit {
  productos: ProductsModel[] = [];

  constructor(private productServices : ProductServices){}

  ngOnInit(): void {
      this.productos = this.productServices.get_producto();
  }
}
