import { Component, Input } from '@angular/core';

@Component({
  selector: 'eal-form-card',
  templateUrl: './eal-form-card.component.html',
  styleUrls: ['./eal-form-card.component.css']
})
export class EalFormCardComponent {
  @Input() title: string;

}
