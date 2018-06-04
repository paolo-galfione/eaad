import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EaClienteRoutingModule } from './ea-cliente.routing.module';
import { EalToolboxModule } from 'eal-toolbox';

import { EaClienteService } from './services/ea-cliente-service';
import { RestInterceptor } from 'eal-core';

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
      // use fake backend in place of Http service for backend-less development
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptor,
      multi: true
    }
  ]
})
export class EaClienteModule { }
