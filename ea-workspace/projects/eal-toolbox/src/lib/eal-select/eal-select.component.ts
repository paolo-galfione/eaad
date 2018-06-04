import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from 'eal-core';

@Component({
  selector: 'eal-select',
  templateUrl: './eal-select.component.html',
  styleUrls: ['./eal-select.component.css']
})
export class EalSelectComponent extends BaseControl implements OnInit {
  @Input() label;
  @Input() options;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {}

}
