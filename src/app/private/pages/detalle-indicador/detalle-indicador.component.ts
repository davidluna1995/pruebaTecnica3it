import { IndicadoresService } from './../../../shared/services/indicadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.component.html',
  styleUrls: ['./detalle-indicador.component.css']
})
export class DetalleIndicadorComponent implements OnInit {

  constructor(
    public _indicadoresService:IndicadoresService,
    private rutaActiva: ActivatedRoute) { }

  detalleIndicador: any;
  tipoIndicador: any;

  ngOnInit(): void {
    this.tipoIndicador = this.rutaActiva.snapshot.params.tipoIndicador;
    this.getDetalleIndicador();

  }

  getDetalleIndicador(){
    this._indicadoresService.getDetalleIndicador(this.tipoIndicador).subscribe(res=>{
     this.detalleIndicador = res;
     console.log(this.detalleIndicador);
     });
   }

}
