import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './private/pages/home/home.component';
import { DetallePreciosIndicadorComponent } from './private/pages/detalle-precios-indicador/detalle-precios-indicador.component';
import { DetalleIndicadorComponent } from './private/pages/detalle-indicador/detalle-indicador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalle-precios-indicador/:tipoIndicador', component: DetallePreciosIndicadorComponent },
  { path: 'detalle-indicador/:tipoIndicador', component: DetalleIndicadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
