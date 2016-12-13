import { Component, Input } from '@angular/core';

@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent{

 @Input() title: string;
 @Input() code: string;
 @Input() preco: string;
 @Input() cad_data: string;
 id: string;
}
