import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidaModule } from '../../compartida/compartida.module';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
	imports: [
		CommonModule,
		CompartidaModule,
		SeguridadRoutingModule
	],
	declarations: [
		IndexComponent,
		UsuarioComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class SeguridadModule { }
