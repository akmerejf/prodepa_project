import { Component } from '@angular/core';
import { MaterialComponent } from '../material/material.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MaterialService} from '../material/material.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  material: MaterialComponent = new MaterialComponent();
  meuForm: FormGroup;
  service: MaterialService;
  route: ActivatedRoute;
  router: Router;
  mensagem: string = '';
  constructor(service: MaterialService, fb: FormBuilder, route: ActivatedRoute, router: Router){
    this.service = service;
    this.route = route;
    this.router = router;

    this.route.params.subscribe(params => {
      let id = params['id'];

      if(id) {
       this.service
        .buscaPorId(id)
        .subscribe(
          material => this.material = material
          , erro => console.log(erro));      }
      
    });

    this.meuForm = fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      codigo: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.required])],
      cad_data: ['', Validators.compose([Validators.required])]

    });
  }
  cadastrar(event) {
      event.preventDefault();

      console.log(this.material);

      this.service
        .cadastra(this.material)
        .subscribe(res =>{
          this.mensagem = res.mensagem;
          this.material = new MaterialComponent();
          if(!res.inclusao) this.router.navigate(['']);
        }, erro => {
          console.log(erro);
          this.mensagem = "Ñão foi possível cadastrar o material"

        });
      }
    }

