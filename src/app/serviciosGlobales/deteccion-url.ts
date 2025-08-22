import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeteccionUrl {
private currentUrl: string = '';
  private initialUrl: string = '';
  private shouldStayOnUrl: boolean = true;
  private isBrowser: boolean;
  
  public stayOnUrlState = new BehaviorSubject<boolean>(true);

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.initializeBrowserLogic();
    }
  }

  private initializeBrowserLogic(): void {
    // Capturar la URL inicial solo en el navegador
    this.initialUrl = window.location.href;
    console.log('URL inicial detectada:', this.initialUrl);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
        console.log('URL actual:', this.currentUrl);
        
        if (this.shouldStayOnUrl && this.currentUrl !== this.initialUrl) {
          this.redirectToInitialUrl();
        }
      });

    this.verifyUrlOnInit();
  }

  private verifyUrlOnInit(): void {
    if (!this.isBrowser) return;

    setTimeout(() => {
      if (window.location.href !== this.initialUrl) {
        console.log('URL modificada al iniciar. Redirigiendo...');
        this.redirectToInitialUrl();
      }
    }, 50);
  }

  private redirectToInitialUrl(): void {
    if (!this.isBrowser) return;

    console.log('Redirigiendo a URL inicial:', this.initialUrl);
    
    this.router.navigateByUrl(this.getUrlPath(this.initialUrl), { 
      replaceUrl: true,
      skipLocationChange: false 
    }).then(() => {
      if (window.location.href !== this.initialUrl) {
        window.location.href = this.initialUrl;
      }
    });
  }

  private getUrlPath(fullUrl: string): string {
    if (!this.isBrowser) return '';

    try {
      const url = new URL(fullUrl);
      return url.pathname + url.search + url.hash;
    } catch {
      return fullUrl;
    }
  }

  getInitialUrl(): string {
    return this.initialUrl;
  }

  isStayOnUrlEnabled(): boolean {
    return this.shouldStayOnUrl && this.isBrowser;
  }

  getCurrentUrl(): string {
    if (!this.isBrowser) return '';
    return this.currentUrl || window.location.href;
  }

  forceUrlVerification(): void {
    if (!this.isBrowser) return;
    
    if (window.location.href !== this.initialUrl) {
      this.redirectToInitialUrl();
    }
  }

  // Método seguro para verificar si estamos en el navegador
  isRunningInBrowser(): boolean {
    return this.isBrowser;
  }
}
