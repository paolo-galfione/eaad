import { Component, Input } from '@angular/core';
import { RouteNav } from 'eal-core';

@Component({
  selector: 'eal-shell',
  templateUrl: './eal-shell.component.html',
  styleUrls: ['./eal-shell.component.css']
})
export class EalShellComponent  {
  @Input() routes: RouteNav[];
}
