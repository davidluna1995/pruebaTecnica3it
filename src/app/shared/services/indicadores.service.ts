import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  getIndicadores():Observable<any>{
    const url = `${this.apiUrl}/api`;
    return this.http.get(url);
  }

  getPreciosIndicadores(tipoIndicador: string):Observable<any>{
    const url = `${this.apiUrl}/api/${tipoIndicador}`;
    return this.http.get(url);
  }

  getDetalleIndicador(tipoIndicador: string):Observable<any>{
    const url = `${this.apiUrl}/api/${tipoIndicador}`;
    return this.http.get(url);
  }
}
