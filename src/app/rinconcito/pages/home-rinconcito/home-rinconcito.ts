import { ChangeDetectorRef, Component, Inject, inject, OnInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cabecera } from "../../components/cabecera/cabecera";
import { ProductsMenu } from '../../services/products-menu';
import { Category } from '../../../InterfaceGlobales/category.model';
import { MenuCategories } from "../../components/menu-categories/menu-categories";
import { ListaEspecialidades } from "../../components/lista-especialidades/lista-especialidades";
import { BotonesMenu } from "../../../AsaderoLala/component/botones-menu/botones-menu";
import { TipoMenusBotones } from "../../../componentesGlobales/tipo-menus-botones/tipo-menus-botones";
@Component({
  selector: 'app-home-rinconcito',
  imports: [
    CommonModule,
    Cabecera,
    TipoMenusBotones,
    MenuCategories,
    ListaEspecialidades
],
  templateUrl: './home-rinconcito.html',
  styleUrl: './home-rinconcito.css'
})
export class HomeRinconcito implements OnInit{
 private nombresCartas = inject(ProductsMenu);
  private cdRef = inject(ChangeDetectorRef);
  
  nombres: string[] = [];
  botonSeleccionado: string = '';
  categorias = signal<Category[]>([]);
  tituloEspecialidades: string = 'Especialidades';
  especialidades = signal<Category[]>([]);
  cargando: boolean = false;

  async ngOnInit() {
    await this.mostrarNombres();
    this.obtenerEspecialidadesServicio()
  }

  async mostrarNombres() {
    try {
      this.nombres = await this.nombresCartas.obtenerNombresCartas();
      console.log('Nombres obtenidos:', this.nombres);
      this.cdRef.detectChanges();
    } catch(error) {
      console.error("Error al obtener nombres:", error);
    }
  }

  async onBotonSeleccionado(nombreMenu: string) {
    this.botonSeleccionado = nombreMenu;
    if (nombreMenu && nombreMenu.trim().length > 0) {
      await this.mostrarProductosMenu(nombreMenu);
    }
  }

  async mostrarProductosMenu(nombreMenu: string) {
    try {
      if (!nombreMenu || nombreMenu.trim().length === 0) {
        console.warn('Nombre de menú vacío');
        return;
      }

      this.cargando = true;
      const categoriasObtenidas = await this.nombresCartas.obtenerCategoriasMenu(nombreMenu);
      
      // Actualizar el signal con las categorías obtenidas
      this.categorias.set(categoriasObtenidas || []);
      
      console.log(`Categorías para ${nombreMenu}:`, categoriasObtenidas);
      
      // Actualizar el título dinámicamente si quieres
      this.tituloEspecialidades = `Especialidades - ${nombreMenu}`;
      
    } catch(error) {
      console.error("Error al obtener categorías:", error);
      this.categorias.set([]); // Limpiar categorías en caso de error
    } finally {
      this.cargando = false;
      this.cdRef.detectChanges(); // Forzar actualización de la vista
    }
  }
  // title = 'my-carousel-app';
  // tituloEspecialidades : string = "Menú del rinconcito";
  // private productosServicio = inject(ProductsMenu);
  // especialidades = signal<Category[]>([]);
  

  // constructor() {
  //   this.obtenerEspecialidadesServicio();
  //   this.obtenerProductosCategorias();
  // }

  // async obtenerProductosCategorias() {
  //   try {
  //       const categorias = this.productosServicio.getCategories();
        
  //       if (categorias && Array.isArray(categorias)) {
  //         this.categorias.set(categorias);
  //         console.log('Categorías obtenidas:', this.categorias());
  //       } else {
  //         console.log("No se encontraron categorías");
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //       alert('Error al obtener las categorías');
  //     }
  //   }
  
  obtenerEspecialidadesServicio() {
  try {
    const data = this.nombresCartas.getEspecialidades();
    
    if (data?.categorias?.length) {
      // Buscar con flexibilidad en el nombre (case insensitive)
      const categoriaEspecialidad = data.categorias.find((categoria : Category) => 
        categoria.name?.toLowerCase().includes('especialidad') ||
        categoria.name?.toLowerCase().includes('especial')
      );
      
      if (categoriaEspecialidad) {
        this.especialidades.set([categoriaEspecialidad]);
        console.log(`Categoría "${categoriaEspecialidad.name}" cargada:`, categoriaEspecialidad);
      } else {
        this.especialidades.set([]);
        console.warn('No se encontró ninguna categoría de especialidad');
        
        // Mostrar todas las categorías disponibles para referencia
        const nombresCategorias = data.categorias.map((c: Category) => c.name).filter(Boolean);
        console.log('Categorías disponibles:', nombresCategorias);
      }
    } else {
      this.especialidades.set([]);
      console.warn('No hay categorías disponibles');
    }
  } catch (error) {
    console.error('Error:', error);
    this.especialidades.set([]);
  }
}
}
