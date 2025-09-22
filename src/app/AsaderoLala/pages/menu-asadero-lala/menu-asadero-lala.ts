import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Portada } from "../../component/portada/portada";
import { Sucursales } from "../../component/sucursales/sucursales";
import { Products } from '../../component/products/products';
import { BotonesMenu } from "../../component/botones-menu/botones-menu";
import { DeteccionUrl } from '../../../serviciosGlobales/deteccion-url';
// import { CanComponentDeactivate } from '../../../guards/stay-on-url-guard';
import { interval, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-menu-asadero-lala',
  imports: [
    Portada,
    Sucursales,
    BotonesMenu
],
  templateUrl: './menu-asadero-lala.html',
  styleUrl: './menu-asadero-lala.css'
})
export class MenuAsaderoLala 
// implements OnInit, OnDestroy, CanComponentDeactivate 
{
  // private urlCheckInterval!: Subscription;
  // private isBrowser: boolean;

  // constructor(
  //   private deteccionUrl: DeteccionUrl,
  //   @Inject(PLATFORM_ID) private platformId: any
  // ) {
  //   this.isBrowser = isPlatformBrowser(this.platformId);
  // }

  // ngOnInit() {
  //   if (this.isBrowser) {
  //     this.initializeBrowserLogic();
  //   }
  // }

  // private initializeBrowserLogic(): void {
  //   console.log('URL inicial fijada:', this.deteccionUrl.getInitialUrl());
    
  //   // Verificación periódica cada segundo solo en navegador
  //   this.urlCheckInterval = interval(1000).subscribe(() => {
  //     this.forceInitialUrl();
  //   });

  //   setTimeout(() => this.forceInitialUrl(), 100);
  // }

  // ngOnDestroy() {
  //   if (this.urlCheckInterval) {
  //     this.urlCheckInterval.unsubscribe();
  //   }
  // }

  // private forceInitialUrl(): void {
  //   if (!this.isBrowser) return;

  //   const currentUrl = window.location.href;
  //   const initialUrl = this.deteccionUrl.getInitialUrl();
    
  //   if (currentUrl !== initialUrl) {
  //     console.warn('URL manipulada detectada. Forzando redirección...');
  //     this.deteccionUrl.forceUrlVerification();
  //   }
  // }

  // canDeactivate(): boolean {
  //   if (!this.isBrowser) return true; // Permitir en SSR
    
  //   console.log('Intento de navegación bloqueado permanentemente');
  //   return false;
  // }

  // // Todos los HostListeners solo se ejecutan en el navegador
  // @HostListener('window:beforeunload', ['$event'])
  // onBeforeUnload(event: BeforeUnloadEvent): string | void {
  //   if (!this.isBrowser) return;
    
  //   event.preventDefault();
  //   event.returnValue = 'No está permitido salir de esta página.';
  //   return 'No está permitido salir de esta página.';
  // }

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: any) {
  //   if (!this.isBrowser) return;
    
  //   history.pushState(null, '', window.location.href);
  //   this.forceInitialUrl();
  // }

  // @HostListener('window:hashchange', ['$event'])
  // onHashChange(event: HashChangeEvent) {
  //   if (!this.isBrowser) return;
    
  //   this.forceInitialUrl();
  // }

  // @HostListener('window:load', ['$event'])
  // onLoad(event: Event) {
  //   if (!this.isBrowser) return;
    
  //   this.forceInitialUrl();
  // }

  // @HostListener('window:focus', ['$event'])
  // onFocus(event: FocusEvent) {
  //   if (!this.isBrowser) return;
    
  //   this.forceInitialUrl();
  // }
}