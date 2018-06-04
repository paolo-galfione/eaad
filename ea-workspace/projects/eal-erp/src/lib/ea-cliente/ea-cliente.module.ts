import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EalToolboxModule } from 'eal-toolbox';
import { RestInterceptor } from 'eal-core';

import { EaClienteRoutingModule } from './ea-cliente.routing.module';
import { EaClienteService } from './services/ea-cliente-service';

import { EaClienteListComponent } from './ea-cliente-list/ea-cliente-list.component';
import { EaClienteEditComponent } from './ea-cliente-edit/ea-cliente-edit.component';

@NgModule({
  declarations: [
    EaClienteListComponent,
    EaClienteEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EalToolboxModule,
    EaClienteRoutingModule,
  ],
  providers: [
    EaClienteService,
    {
      // utilizzo un interceptor di chiamate rest per simulare
      // l'API di un backend usando il localdb
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptor,
      multi: true
    }
  ]
})
export class EaClienteModule { }
