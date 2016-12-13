import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { PainelModule } from './painel/painel.module';
import {routing} from './app.routes';
import {BotaoModule} from './botao/botao.module';
import { TabelaComponent } from './tabela/tabela.component';
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    TabelaComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    PainelModule,
    ReactiveFormsModule,
    routing,
    BotaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
