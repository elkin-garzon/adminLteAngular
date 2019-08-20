import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidaModule } from '../../compartida/compartida.module';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
	imports: [
		CommonModule,
		CompartidaModule,
		SeguridadRoutingModule
	],
	declarations: [
		IndexComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class SeguridadModule { }
