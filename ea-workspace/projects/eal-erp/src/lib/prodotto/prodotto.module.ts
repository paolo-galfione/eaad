import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EalToolboxModule } from 'eal-toolbox';
import { RestInterceptor } from 'eal-core';

import { ProdottoRoutingModule } from './prodotto.routing.module';
import { ProdottoService } from './services/prodotto-service';

import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import { ProdottoEditComponent } from './prodotto-edit/prodotto-edit.component';

@NgModule({
  declarations: [
    ProdottoListComponent,
    ProdottoEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EalToolboxModule,
    ProdottoRoutingModule,
  ],
  providers: [
    ProdottoService,
    {
      // utilizzo un interceptor di chiamate rest per simulare
      // l'API di un backend usando il localdb
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptor,
      multi: true
    }
  ]
})
export class ProdottoModule { }
