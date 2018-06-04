import { Component, Input } from '@angular/core';
import { RouteNav } from 'eal-core';

@Component({
  selector: 'eal-navbar',
  templateUrl: './eal-navbar.component.html',
  styleUrls: ['./eal-navbar.component.css']
})
export class EalNavbarComponent {
  @Input() routes: RouteNav[];

}
