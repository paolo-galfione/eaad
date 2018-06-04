import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteNav } from 'eal-core';
// work-around, la versione corrente di A6 da un problema con il lazy load di una lib
// https://github.com/angular/angular/issues/23358
import { EaClienteModule } from 'eal-erp';

export const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
//  { path: 'clienti', loadChildren: 'eal-erp#EaClienteModule', title: 'Clienti' }
  { path: 'clienti', loadChildren: 'dist/eal-erp#EaClienteModule', title: 'Clienti' },
  { path: 'clientigen', loadChildren: 'dist/eal-erp#ClienteModule', title: 'ClientiGen' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
