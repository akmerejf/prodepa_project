import { Component, OnInit } from '@angular/core';
import {MaterialService} from '../material/material.service';
import {MaterialComponent} from '../material/material.component';
import {PainelComponent} from '../painel/painel.component';

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

  	constructor(service: MaterialService){
      this.service = service;
  		this.service
        .lista()
        .subscribe(materiais => {
          this.materiais = materiais
          console.log(materiais);
        }, erro => console.log(erro));
  	}

  ngOnInit() {
  }

  remover(material: MaterialComponent, painel: PainelComponent){
 
      this.service
        .remove(material)
        .subscribe(
                () => {
                    painel.fadeOut(()=>{
                      console.log('Foto removida com sucesso');
                      let novosMateriais = this.materiais.slice(0);
                      let indice = novosMateriais.indexOf(material);
                      novosMateriais.splice(indice, 1);
                      this.materiais = novosMateriais;
                      this.mensagem = 'Material removido com sucesso';
                    });
                }, 
                erro => {
                  console.log(erro);
                  this.mensagem = 'Não foi possível remover o material';
              }
            );
    }

}
