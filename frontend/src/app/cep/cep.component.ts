import { Component, OnInit } from '@angular/core';
import {CepService} from '../../service/cep.service';
import {cep} from 'src/app/cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.sass']
})
export class CepComponent implements OnInit {

  ObjetocepBuscado = new cep()
  constructor(private CepService: CepService) { }

  ngOnInit(): void {
  }

  atribuir() {
    this.CepService.buscar(this.ObjetocepBuscado.cep).subscribe({
      next: (n) =>{console.log(n)
        this.ObjetocepBuscado = n}
    })
  }
}
