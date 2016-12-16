import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {MaterialService} from '../material/material.service';
import {MaterialComponent} from '../material/material.component';
import {TabelaComponent} from '../tabela/tabela.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

    mensagem: string = '';
    title : string = 'Lista de Materiais';
  	materiais : MaterialComponent[] = [];
    service: MaterialService;
    @Output() busca = new EventEmitter;
    textoBusca: string= '';

  	constructor(service: MaterialService){
      this.service = service;
      
  	}

  ngOnInit() {
      this.service
      .lista()
      .subscribe(materiais => {
        this.materiais = materiais
        console.log(materiais);
      }, erro => console.log(erro));
    
       
  }

  lista(busca: string){
    this.textoBusca = busca;
    this.service
        .buscaPorNome(busca)
        .subscribe(materiais => {
          
          this.materiais = materiais
         
          console.log(materiais);
        }, erro => console.log(erro));
  }

  remover(material: MaterialComponent){
 
      this.service
        .remove(material)
        .subscribe(
                () => {
                   
                      console.log('Foto removida com sucesso');
                      let novosMateriais = this.materiais.slice(0);
                      let indice = novosMateriais.indexOf(material);
                      novosMateriais.splice(indice, 1);
                      this.materiais = novosMateriais;
                      this.mensagem = 'Material removido com sucesso';
                   
                }, 
                erro => {
                  console.log(erro);
                  this.mensagem = 'Não foi possível remover o material';
              }
            );
    }

}
