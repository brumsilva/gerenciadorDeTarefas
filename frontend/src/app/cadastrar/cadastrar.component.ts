import { Component, OnInit } from '@angular/core';
// importando o arquivo de serviços
import { Tarefa, TarefaService } from '../../service/tarefa.service';
// importando a biblioteca para se trabalhar com rotas
import {Router} from '@angular/router'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  tarefa:Tarefa = {
    id_tarefa:'',
    descricao:'',
    obs:''
  }

  constructor(private TarefaService:TarefaService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    // aqui deletamos o atributo id_tarefa, pois esse atributo é criado do forma automática
    delete this.tarefa.id_tarefa

    // aqui nós fizemos a inserção da nova tarefa no banco de dados
    this.TarefaService.addTarefa(this.tarefa).subscribe({
      next:(resultado) => console.log(resultado),
      error: (erro) => console.log(erro),
      complete: () => console.info("😎")
    })
    // voltar para a tabela de tarefas (componente início)
    this.router.navigate(['/inicio'])
  }

}
