import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryImage {
  src: string;
  alt?: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-instalaciones',
  imports: [CommonModule],
  templateUrl: './instalaciones.html',
  styleUrl: './instalaciones.css'
})
export class Instalaciones {
  @Input() images: GalleryImage[] = [];
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 4000;
  @Input() showThumbnails: boolean = true;

  currentIndex: number = 0;
  isLightboxOpen: boolean = false;
  isAnimating: boolean = false;
  private autoPlayTimer: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  // Navegación del carousel
  goToSlide(index: number) {
    if (this.isAnimating || index === this.currentIndex) return;
    
    this.isAnimating = true;
    this.currentIndex = index;
    this.stopAutoPlay();
    
    setTimeout(() => {
      this.isAnimating = false;
      if (this.autoPlay) {
        this.startAutoPlay();
      }
    }, 500);
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.goToSlide(prevIndex);
  }

  // Thumbnails
  onThumbnailClick(index: number) {
    this.goToSlide(index);
  }

  // Lightbox
  openLightbox(index?: number) {
    this.currentIndex = index ?? this.currentIndex;
    this.isLightboxOpen = true;
    document.body.classList.add('overflow-hidden');
    this.stopAutoPlay();
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.classList.remove('overflow-hidden');
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  lightboxNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  lightboxPrev() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  // Auto-play
  private startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  // Navegación por teclado
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        this.lightboxPrev();
        break;
      case 'ArrowRight':
        this.lightboxNext();
        break;
      case 'Escape':
        this.closeLightbox();
        break;
    }
  }
}