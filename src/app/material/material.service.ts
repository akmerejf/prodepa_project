import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { MaterialComponent } from './material.component';
import { Observable } from 'rxjs';


@Injectable()
export class MaterialService {
	http: Http;
	headers: Headers;
	url: string = 'http://localhost:3000/materials'
  mensagem: string = '';
  constructor(http: Http) { 
  	this.http = http;
  	this.headers = new Headers();
  	this.headers.append('Content-Type', 'application/json');
  }

  cadastra(material: MaterialComponent): Observable<MensagemCadastro>{
    if(material.id) {
      
      return this.http
              .put(this.url + '/' + material.id, JSON.stringify(material), {headers: this.headers})
              .map(() => new MensagemCadastro('Material atualizado com sucesso', false));
    }else{
  	return this.http
        	.post(this.url, JSON.stringify(material), {headers: this.headers})
          .map(() => new MensagemCadastro('Material cadastrado com sucesso', true));
    }
  }

  lista(): Observable<MaterialComponent[]>{
  		return this.http
        .get(this.url)
	  		.map(res => res.json());

	    }

  remove(material: MaterialComponent){
       return this.http
        .delete(this.url+'/'+material.id, this.headers)
        .map(res => res.json());
      }

  buscaPorId(id: string): Observable<MaterialComponent> {
    return this.http.get(this.url+'/'+id)
    .map(res => res.json());

    }

  }

  export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {
      this._mensagem = _mensagem;
      this._inclusao = _inclusao;
    }

    get mensagem(): string{
      return this._mensagem;
    }

    get inclusao(): boolean{
       return this._inclusao;
    }
  }

