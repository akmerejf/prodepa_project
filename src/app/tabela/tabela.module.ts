import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabelaComponent],
  exports: [TabelaComponent]
})
export class TabelaModule { }
