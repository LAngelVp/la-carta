import { CommonModule } from '@angular/common';
import { Component, computed, Input, Signal } from '@angular/core';
import { Category } from '../../models/category.model';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  badge?: string;
  price?: string | number;
  comment?: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  @Input() especialidades!: Signal<Category[]>;
  logotipo : string = "/elRinconcito/logosIconos/logotipoColor.png"
  tituloarrusel: string = "todas nuestras especialidades";
  currentIndex = 0;
  
  cards = computed(() => {
    const categories = this.especialidades();
    let cardId = 0;
    const cards: Card[] = [];

    categories.forEach(categoria => {
      categoria.products.forEach(producto => {
        cards.push({
          id: cardId++,
          title: producto.name,
          description: this.generateDescription(producto),
          image: producto.image || '/elRinconcito/logosIconos/logotipoColor.png',
          badge: categoria.name,
          price: producto.price,
          comment: producto.comment
        });
      });
    });

    return cards;
  });

  // ✅ CORREGIDO: Usar computed para mejor performance
  visibleCards = computed(() => {
    const cardsArray = this.cards();
    return cardsArray.slice(this.currentIndex, this.currentIndex + this.cardsPerView);
  });

  get cardsPerView(): number {
    if (typeof window === 'undefined') return 3;
    
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    if (width < 1280) return 4;
    return 5;
  }

  next(): void {
    const cardsArray = this.cards(); // ✅ CORREGIDO
    if (this.currentIndex < cardsArray.length - this.cardsPerView) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goTo(index: number): void {
    const cardsArray = this.cards(); // ✅ CORREGIDO
    if (index >= 0 && index <= cardsArray.length - this.cardsPerView) {
      this.currentIndex = index;
    }
  }

  // ✅ CORREGIDO: Usar computed para totalSlides
  totalSlides = computed(() => {
    const cardsArray = this.cards();
    return Math.max(0, cardsArray.length - this.cardsPerView + 1);
  });

  private generateDescription(producto: any): string {
    let description = '';
    
    if (producto.comment) {
      description += producto.comment + ' ';
    }
    
    if (producto.presentations && producto.presentations.length > 0) {
      description += `Presentaciones: ${producto.presentations.map((p: any) => p.name).join(', ')}. `;
    }
    
    if (producto.sizes && producto.sizes.length > 0) {
      const prices = producto.sizes.map((size: any) => `${size.name}: $${size.price}`);
      description += `Precios: ${prices.join(', ')}.`;
    } else if (producto.price) {
      description += `Precio: $${producto.price}.`;
    }
    
    return description.trim() || 'Deliciosa especialidad de la casa';
  }
}