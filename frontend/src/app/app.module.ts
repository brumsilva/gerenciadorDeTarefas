import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TodoListComponent } from './todolist/todolist.component';

import { ModificarComponent } from './modificar/modificar.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';

import {HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    ModificarComponent,
    CadastrarComponent,
    CepComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
