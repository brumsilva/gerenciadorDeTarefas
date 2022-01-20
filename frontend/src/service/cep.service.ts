import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  result: any
  constructor(public http:HttpClient) { }
    buscar(cep:string){
      return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
    }
}
