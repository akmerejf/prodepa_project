import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {TabelaComponent} from './tabela/tabela.component';

const appRoutes: Routes = [
	{path: '', component: ListagemComponent},
	{path: 'cadastro', component: CadastroComponent},
	{path: 'cadastro/:id', component: CadastroComponent},
	{path: '**', component: TabelaComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
