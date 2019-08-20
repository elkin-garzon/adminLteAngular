import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
	{
		path: '',
		component: IndexComponent,
		children: [
			{
				path: 'usuarios', component: UsuarioComponent,
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeguridadRoutingModule { }
