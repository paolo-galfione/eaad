import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from 'eal-core';

@Component({
  selector: 'eal-text',
  templateUrl: './eal-text.component.html',
  styleUrls: ['./eal-text.component.css']
})
export class EalTextComponent extends BaseControl implements OnInit {
  @Input() label;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {}
}
