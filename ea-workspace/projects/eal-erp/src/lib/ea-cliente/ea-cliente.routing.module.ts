import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaClienteListComponent } from './ea-cliente-list/ea-cliente-list.component';
import { EaClienteEditComponent } from './ea-cliente-edit/ea-cliente-edit.component';

export const routes: Routes = [
  { path: '', component: EaClienteListComponent },
  { path: ':id', component: EaClienteEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes /* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class EaClienteRoutingModule { }
