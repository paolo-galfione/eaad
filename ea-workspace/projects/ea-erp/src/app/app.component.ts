import { Component } from '@angular/core';
import { RouteNav, RestInterceptor } from 'eal-core';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ea';
  pippo: RestInterceptor;
}
