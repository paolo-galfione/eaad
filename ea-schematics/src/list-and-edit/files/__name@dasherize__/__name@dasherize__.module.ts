import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EalToolboxModule } from 'eal-toolbox';
import { RestInterceptor } from 'eal-core';

import { <%=classify(name)%>RoutingModule } from './<%=dasherize(name)%>.routing.module';
import { <%=classify(name)%>Service } from './services/<%=dasherize(name)%>-service';

import { <%=classify(name)%>ListComponent } from './<%=dasherize(name)%>-list/<%=dasherize(name)%>-list.component';
import { <%=classify(name)%>EditComponent } from './<%=dasherize(name)%>-edit/<%=dasherize(name)%>-edit.component';

@NgModule({
  declarations: [
    <%=classify(name)%>ListComponent,
    <%=classify(name)%>EditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EalToolboxModule,
    <%=classify(name)%>RoutingModule,
  ],
  providers: [
    <%=classify(name)%>Service,
    {
      // utilizzo un interceptor di chiamate rest per simulare
      // l'API di un backend usando il localdb
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptor,
      multi: true
    }
  ]
})
export class <%=classify(name)%>Module { }
