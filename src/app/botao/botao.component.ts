import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

	@Input() nome: string = 'Ok';
	@Input() estilo: string = 'btn-default';
	@Input() tipo: string = 'button';
	@Input() desabilitado: boolean = false;
	@Output() acao = new EventEmitter;
	@Input() confirmacao: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  executaAcao(){
  	if(this.confirmacao){ 
	  	if(confirm('Deseja excluir?')){
	  		this.acao.emit(null);
			
	  	}
	  	return;
	}
		this.acao.emit(null);
  }

}
