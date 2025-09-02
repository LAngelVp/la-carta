import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';
import { CommonModule } from '@angular/common';
import { ProductsMenu } from '../../services/products-menu';

@Component({
  selector: 'app-menu-categories',
  imports: [
    CommonModule
  ],
  templateUrl: './menu-categories.html',
  styleUrl: './menu-categories.css'
})
export class MenuCategories {
  categories: Category[] = [];
  selectedCategory: string | null = null; // Para mantener un seguimiento de la categoría seleccionada

  @Output() categorySelected = new EventEmitter<string>(); // Emite el nombre de la categoría seleccionada

  constructor(private menuService: ProductsMenu) { }

  ngOnInit(): void {
    this.categories = this.menuService.getCategories();
    // Opcional: Seleccionar la primera categoría por defecto al cargar
    if (this.categories.length > 0) {
      this.selectCategory(this.categories[0].name);
    }
  }

  selectCategory(categoryName: string): void {
    this.selectedCategory = categoryName;
    this.categorySelected.emit(categoryName); // Emitir la categoría seleccionada
    console.log(`Categoría seleccionada: ${categoryName}`);
    // Aquí podrías cargar los ítems del menú correspondientes a esta categoría
  }
}
