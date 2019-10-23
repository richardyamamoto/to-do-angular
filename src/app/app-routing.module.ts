import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DialogoComponent} from '../app/dialogo/dialogo.component'


const routes: Routes = [
  {
    path:'dialogo',
    component: DialogoComponent,
  },
  {
    path: '',
    redirectTo: 'dialogo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
