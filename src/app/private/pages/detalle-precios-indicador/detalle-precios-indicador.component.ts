import { IndicadoresService } from './../../../shared/services/indicadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-precios-indicador',
  templateUrl: './detalle-precios-indicador.component.html',
  styleUrls: ['./detalle-precios-indicador.component.css']
})
export class DetallePreciosIndicadorComponent implements OnInit {

  constructor(
    public _indicadoresService:IndicadoresService,
    private rutaActiva: ActivatedRoute) { }

  indicadorPrecio: any;
  tipoIndicador: any;

  ngOnInit(): void {
    this.tipoIndicador = this.rutaActiva.snapshot.params.tipoIndicador;
    this.getIndicadores();

  }

  getIndicadores(){
    this._indicadoresService.getPreciosIndicadores(this.tipoIndicador).subscribe(res=>{
     this.indicadorPrecio = res;
     console.log(this.indicadorPrecio);
     });
   }

}
