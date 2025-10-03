import { Component, Input, Signal } from '@angular/core';
import { Category } from '../../models/category.model';
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
}
