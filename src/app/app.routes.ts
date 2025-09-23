import { Routes } from '@angular/router';
import { MenuAsaderoLala } from './AsaderoLala/pages/menu-asadero-lala/menu-asadero-lala';
import { NotFound } from './componentesGlobales/not-found/not-found';
import { HomeRinconcito } from './rinconcito/pages/home-rinconcito/home-rinconcito';
import { stayOnUrlGuard } from './guards/stay-on-url-guard';

export const routes: Routes = [
    {
        path: "asadero-doña-lala",
        loadComponent: () => 
            import('./AsaderoLala/pages/menu-asadero-lala/menu-asadero-lala')
                .then(c => c.MenuAsaderoLala),
        canActivate: [stayOnUrlGuard]
    },
    {
        path: "elRinconcito",
        loadComponent: () => 
            import('./rinconcito/pages/home-rinconcito/home-rinconcito')
                .then(c => c.HomeRinconcito),
        canActivate: [stayOnUrlGuard]
    },
    {
        path: "",
        component: NotFound
    },
    {
        path: "**",
        component: NotFound,
        pathMatch: 'full'
    }
];
