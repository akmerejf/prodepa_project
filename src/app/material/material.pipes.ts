import { Pipe, PipeTransform } from '@angular/core';
import { MaterialComponent } from './material.component';
 
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform { 

    transform(materiais: MaterialComponent[], digitado: string) {

        digitado = digitado.toLowerCase();
        return materiais.filter( material => material.title.toLowerCase().includes(digitado));
    }
}