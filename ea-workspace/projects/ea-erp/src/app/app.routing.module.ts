import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteNav } from 'eal-core';
import { EaClienteRoutingModule } from 'eal-erp';

export const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
//  { path: 'clienti', loadChildren: 'eal-erp#EaClienteModule', title: 'Clienti' }
  { path: 'clienti', loadChildren: 'dist/eal-erp#EaClienteModule', title: 'Clienti' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
