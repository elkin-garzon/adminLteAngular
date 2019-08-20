import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* MODULOS */
import { CompartidaModule } from './compartida/compartida.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CompartidaModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class AppModule { }
