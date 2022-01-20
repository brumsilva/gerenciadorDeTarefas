import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../../service/tarefa.service';
// importando a biblioteca para se trabalhar com rotas
import {Router} from '@angular/router'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodoListComponent implements OnInit {

  listarTarefas: Tarefa[]

  constructor( private TarefaService: TarefaService, private router:Router) {
    this.listarTarefas = []
  }
  //ao iniciar esse componente deve-se executar a função listarTarefas
  ngOnInit(): void {
    this.ListarTarefas()
  }

  //aqui é uma função que realiza a listagem das tarefas que estão cadastradas no banco
  ListarTarefas(){
    // @ts-ignore
    this.TarefaService.getTarefas().subscribe({
      next: (resultado) => {console.log(resultado)
      this.listarTarefas = <any>resultado},
      error: (erro) => console.log(erro),
      complete: () => console.info('🤖')
    })
  }

  excluir(id:any){
    this.TarefaService.deleteTarefa(id).subscribe({
        next: (resultado) =>{console.log("🗑️")
        this.ListarTarefas()},
        error: (erro) => console.error(erro),
        complete: () => console.info ("👋🏻")

    })}

    editar(id:any){
      this.router.navigate(['/edit/' + id])
    }

}
