import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { ImoveisDisponiveisComponent } from './pages/imoveis-disponiveis.component';
import { ImoveisIndisponiveisComponent } from './pages/imoveis-indisponiveis.component';
import { DetalheImovelComponent } from './pages/detalhe-imovel.component';
import { VistoriaComponent } from './pages/vistoria.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'imoveis-disponiveis', component: ImoveisDisponiveisComponent },
    { path: 'imoveis-indisponiveis', component: ImoveisIndisponiveisComponent },
    { path: 'detalhe-imovel/:id', component: DetalheImovelComponent },
    { path: 'vistoria/:id', component: VistoriaComponent },
];
