import { Routes } from "@angular/router";
import { CardapioComponent } from "./componentes/cardapio-component/cardapio-component";
import { CarroCompraComponent } from "./componentes/carro-compra-component/carro-compra-component";
import { GaleriaComponent } from "./componentes/galeria-component/galeria-component";
import {HomeComponent} from "./componentes/home-component/home-component"
import { MercadoComponent } from "./componentes/mercado-component/mercado-component";

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component:HomeComponent   },
  { path: 'mercado', component: MercadoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'carro-compra', component: CarroCompraComponent },

  { path: '**', redirectTo: 'home' }
];