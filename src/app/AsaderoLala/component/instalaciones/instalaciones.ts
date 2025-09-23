import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

export interface GalleryImage {
  src: string;
  alt?: string;
  thumbnail?: string;
  category?: string;
}

@Component({
  selector: 'app-instalaciones',
  imports: [
    CommonModule
  ],
  templateUrl: './instalaciones.html',
  styleUrl: './instalaciones.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Agregar esto
})
export class Instalaciones implements AfterViewInit, OnDestroy {
  @Input() images: GalleryImage[] = [];
  
  @Input() showThumbnails: boolean = true;
  @Input() autoPlay: boolean = false;
  @Input() autoPlayDelay: number = 2000;
  @Input() showLightbox: boolean = true;
  @Input() gridLayout: boolean = false;
  @Input() columns: number = 3;
  
  @Output() imageClick = new EventEmitter<GalleryImage>();

  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;
  @ViewChild('lightboxSwiper') lightboxSwiper!: ElementRef<SwiperContainer>;

  currentIndex: number = 0;
  isLightboxOpen: boolean = false;
  private autoPlayInterval?: any;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [-20, 0, -100],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    breakpoints: {
      640: { slidesPerView: 1.1, spaceBetween: 20 },
      768: { slidesPerView: 1.3, spaceBetween: 25 },
      1024: { slidesPerView: 1.5, spaceBetween: 30 }
    }
  };

  lightboxConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    keyboard: { enabled: true }
  };

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeSwiper();
      if (this.autoPlay) this.startAutoPlay();
    });
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private initializeSwiper() {
    if (this.swiperContainer?.nativeElement && this.images.length > 0) {
      try {
        Object.assign(this.swiperContainer.nativeElement, this.swiperConfig);
        this.swiperContainer.nativeElement.initialize();
      } catch (error) {
        console.warn('Error initializing swiper:', error);
      }
    }
  }

  private startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      if (this.swiperContainer?.nativeElement?.swiper) {
        this.swiperContainer.nativeElement.swiper.slideNext();
      }
    }, this.autoPlayDelay);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = undefined;
    }
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.isLightboxOpen = true;
    document.body.classList.add('overflow-hidden');
    
    setTimeout(() => {
      if (this.lightboxSwiper?.nativeElement && this.images.length > 0) {
        try {
          Object.assign(this.lightboxSwiper.nativeElement, this.lightboxConfig);
          this.lightboxSwiper.nativeElement.initialize();
          this.lightboxSwiper.nativeElement.swiper.slideTo(index);
        } catch (error) {
          console.warn('Error initializing lightbox swiper:', error);
        }
      }
    }, 100);
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  nextImage() {
    if (this.lightboxSwiper?.nativeElement?.swiper) {
      this.lightboxSwiper.nativeElement.swiper.slideNext();
    }
  }

  prevImage() {
    if (this.lightboxSwiper?.nativeElement?.swiper) {
      this.lightboxSwiper.nativeElement.swiper.slidePrev();
    }
  }

  onImageClick(image: GalleryImage, index: number) {
    if (this.showLightbox && this.images.length > 0) {
      this.openLightbox(index);
    }
    this.imageClick.emit(image);
  }

  onThumbnailClick(index: number) {
    if (this.swiperContainer?.nativeElement?.swiper) {
      this.swiperContainer.nativeElement.swiper.slideTo(index);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isLightboxOpen) this.closeLightbox();
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight() {
    if (this.isLightboxOpen) this.nextImage();
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft() {
    if (this.isLightboxOpen) this.prevImage();
  }

  get gridColumnsClass(): string {
    const cols: { [key: number]: string } = {
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6'
    };
    return cols[this.columns] || 'grid-cols-3';
  }
}