import { Component, OnInit } from '@angular/core';
// importando o arquivo de serviços
import { Tarefa, TarefaService } from '../../service/tarefa.service';
// importando a biblioteca para se trabalhar com rotas
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.sass']
})
export class ModificarComponent implements OnInit {

  tarefa: Tarefa = {
    id_tarefa:'',
    descricao:'',
    obs:''
}
  constructor(private TarefaService: TarefaService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activeRouter.snapshot.params['id']
    console.log("id de entrada:" + '' + id_entrada)
    this.TarefaService.getUmaTarefas(id_entrada).subscribe({
      next: (resultado) => { console.log(resultado)
                                      this.tarefa = resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info()
    })

  }

  modificar() {
    this.TarefaService.editTarefa(this.tarefa.id_tarefa, this.tarefa).subscribe({
      next: (resultado) => console.log('Tarefa editada com sucesso'),
      error: (erro) => console.error(erro),
      complete: () => console.info('edição completada com êxito')
    })
    this.router.navigate(['/inicio'])
  }
}
