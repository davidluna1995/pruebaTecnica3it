import { IndicadoresService } from './../../../shared/services/indicadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-grafico-indicador',
  templateUrl: './detalle-grafico-indicador.component.html',
  styleUrls: ['./detalle-grafico-indicador.component.css'],
  providers: [DatePipe]
})
export class DetalleGraficoIndicadorComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Indicadores' },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
      labels: {
        fontColor: 'black',
        fontStyle: 'bold',
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontStyle: 'bold',
          fontColor: 'black',
        }
      }],
      yAxes: [{
        ticks: {
          fontStyle: 'bold',
          fontColor: 'black',
        }
      }]
    },
    annotation: {
      annotations: [
        {
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(76,63,191,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    public _indicadoresService: IndicadoresService,
    private rutaActiva: ActivatedRoute,
    private datePipe: DatePipe) { }

  graficoIndicador: any;
  tipoIndicador: any;

  ngOnInit(): void {
    this.tipoIndicador = this.rutaActiva.snapshot.params.tipoIndicador;
    this.getGraficoIndicador();

  }

  getGraficoIndicador() {
    this._indicadoresService.getDetalleIndicador(this.tipoIndicador).subscribe(res => {
      this.graficoIndicador = res.serie;
      // console.log(this.graficoIndicador);
      this.graficoIndicador.slice(0,10).map(item => {
          // console.log(item);
          this.lineChartData[0].data.push(item.valor);
          item.fecha = this.datePipe.transform(item.fecha,'dd-MM-yyyy')
          this.lineChartLabels.push(item.fecha);
        })
    });
  }

}
