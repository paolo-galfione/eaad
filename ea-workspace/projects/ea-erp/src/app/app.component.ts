import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { RouteNav } from 'eal-core';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: RouteNav[];

  constructor(private router: Router) {
    this.routes = this.router.config;
  }
}
