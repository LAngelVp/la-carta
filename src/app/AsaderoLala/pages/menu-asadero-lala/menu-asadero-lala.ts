import { Component, OnInit } from '@angular/core';
import { Portada } from "../../component/portada/portada";
import { Sucursales } from "../../component/sucursales/sucursales";
import { Products } from '../../component/products/products';
import { BotonesMenu } from "../../component/botones-menu/botones-menu";

@Component({
  selector: 'app-menu-asadero-lala',
  imports: [
    Portada,
    Sucursales,
    Products,
    BotonesMenu
],
  templateUrl: './menu-asadero-lala.html',
  styleUrl: './menu-asadero-lala.css'
})
export class MenuAsaderoLala {
 
}
