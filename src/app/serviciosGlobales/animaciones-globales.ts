import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AnimacionesGlobales {
  private observer!: IntersectionObserver;
  private animatedElements = new Set<Element>();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  initScrollAnimations(config: AnimationConfig = {}) {
    if (!isPlatformBrowser(this.platformId)) return;

    const {
      threshold = 0.1,
      rootMargin = '0px',
      once = true
    } = config;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          
          if (once) {
            this.observer.unobserve(entry.target);
          }
        } else if (!once) {
          this.resetElement(entry.target);
        }
      });
    }, { threshold, rootMargin });

    // Observar todos los elementos con la clase
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      this.observer.observe(el);
    });
  }

  animateElement(element: Element) {
    element.classList.add('animated');
    this.animatedElements.add(element);
  }

  resetElement(element: Element) {
    element.classList.remove('animated');
    this.animatedElements.delete(element);
  }

  // Para contenido dinámico (como tu carrusel)
  observeElement(element: Element) {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  unobserveElement(element: Element) {
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }

  refresh() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Reobservar todos los elementos (útil para contenido dinámico)
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      if (!this.animatedElements.has(el)) {
        this.observer.observe(el);
      }
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
