import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaClienteListComponent } from './ea-cliente-list/ea-cliente-list.component';
import { EaClienteEditComponent } from './ea-cliente-edit/ea-cliente-edit.component';

export const eaClienteRoutes: Routes = [
  { path: '', component: EaClienteListComponent },
  { path: ':id', component: EaClienteEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(eaClienteRoutes /* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class EaClienteRoutingModule { }
