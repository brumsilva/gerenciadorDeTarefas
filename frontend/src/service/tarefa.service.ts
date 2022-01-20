import { Injectable } from '@angular/core';
import {} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
static getTarefas() {
  throw new Error('Method not implemented.');
}

url = "/tarefas"

constructor( private http: HttpClient) { }

//listar todas as tarefas que estão armazenadas no banco de dados

    getTarefas(id_entrada: any) {
  return this.http.get(this.url);
}

//get de uma tarefa
getUmaTarefas(id:any) {
 return this.http.get(this.url + '/' + id)
}

//adicionar uma tarefa
addTarefa(tarefa:Tarefa) {
  return this.http.post(this.url, tarefa)
}

// modificar uma tarefa
editTarefa(id:any, tarefa:Tarefa) {
  return this.http.put(this.url + '/' + id, tarefa)
}

//deletar uma tarefa
deleteTarefa(id:any) {
  return this.http.delete(this.url + '/' + id)
}
}

export interface Tarefa {
  id_tarefa?:string
  descricao?:string
  obs?:string
}
