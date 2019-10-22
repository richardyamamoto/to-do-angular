import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DialogoComponent} from '../app/dialogo/dialogo.component'


const routes: Routes = [
  { path: '', component: DialogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
