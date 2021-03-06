import { Input, Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

	@Input() titulo: String;
	elemento: ElementRef;
	constructor(elemento: ElementRef){
		this.elemento = elemento;
	}
  ngOnInit() {
  	this.titulo = this.titulo.length > 7
    ? `${this.titulo.substr(0, 7)}...`
    : this.titulo;
  }

  fadeOut(cb){
  	$(this.elemento.nativeElement).fadeOut(cb);
  }

}
