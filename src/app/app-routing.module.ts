import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '', 
      loadChildren: './modules/login/login.module#LoginModule'
    },
    {
      path: 'seguridad', 
      loadChildren: './modules/seguridad/seguridad.module#SeguridadModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
