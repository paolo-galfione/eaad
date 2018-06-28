import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import { ProdottoEditComponent } from './prodotto-edit/prodotto-edit.component';

export const prodottoRoutes: Routes = [
  { path: '', component: ProdottoListComponent },
  { path: ':id', component: ProdottoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prodottoRoutes /* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class ProdottoRoutingModule { }
