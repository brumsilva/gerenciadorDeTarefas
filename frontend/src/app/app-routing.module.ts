import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todolist/todolist.component';

import { ModificarComponent } from './modificar/modificar.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { CepComponent } from './cep/cep.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch: 'full'},
  {path:'inicio', component: TodoListComponent},
  {path: 'add', component: CadastrarComponent },
  {path: 'edit/:id', component: ModificarComponent },
  {path: 'cep', component: CepComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
