import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { FiltroPorTitulo } from './material.pipes';
import { MaterialService } from './material.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaterialComponent, FiltroPorTitulo],
  exports: [MaterialComponent, FiltroPorTitulo],
  providers: [MaterialService]
})
export class MaterialModule { }
