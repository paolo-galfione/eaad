import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from 'eal-core';

@Component({
  selector: 'eal-check',
  templateUrl: './eal-check.component.html',
  styleUrls: ['./eal-check.component.css']
})
export class EalCheckComponent extends BaseControl implements OnInit {
  @Input() label;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {}

  toggle(e) {
    console.log('check', this.value, e);
    this.value = !this.value;
  }
}
