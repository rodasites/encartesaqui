import { ContactComponent } from './pages/contact/contact.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/core';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'sobre-nos', component: QuemSomosComponent },
    { path: 'contato', component: ContactComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);