import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './private/components/footer/footer.component';
import { NavbarComponent } from './private/components/navbar/navbar.component';
import { HomeComponent } from './private/pages/home/home.component';
import { DetallePreciosIndicadorComponent } from './private/pages/detalle-precios-indicador/detalle-precios-indicador.component';
import { DetalleIndicadorComponent } from './private/pages/detalle-indicador/detalle-indicador.component';
import { DetalleGraficoIndicadorComponent } from './private/pages/detalle-grafico-indicador/detalle-grafico-indicador.component';
import { IndicadoresComponent } from './private/pages/indicadores/indicadores.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DetallePreciosIndicadorComponent,
    DetalleIndicadorComponent,
    DetalleGraficoIndicadorComponent,
    IndicadoresComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
