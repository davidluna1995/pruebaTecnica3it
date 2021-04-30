import { IndicadoresService } from './../../../shared/services/indicadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  constructor(public _indicadoresService:IndicadoresService) { }

  indicador: any;
  tipoIndicador: any;

  ngOnInit(): void {
    this.getIndicadores();
  }

  getIndicadores(){
   this._indicadoresService.getIndicadores().subscribe(res=>{
    this.indicador = res;
    console.log(this.indicador);
    });
  }
}
