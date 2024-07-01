import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./routes/main.route'),
        pathMatch: 'full',
    },
    {
        path: 'wheel',
        loadComponent: () => import('./routes/wheel.route'),
    },
    {
        path: 'rules',
        loadComponent: () => import('./routes/rules.route'),
    }
    ,
    {
        path: 'resources',
        loadComponent: () => import('./routes/resources.route'),
    }
    ,
    {
        path: 'contact',
        loadComponent: () => import('./routes/contact.route'),
    }
];