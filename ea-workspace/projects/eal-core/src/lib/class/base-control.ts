import { NgControl, ControlValueAccessor } from '@angular/forms';

export class BaseControl implements ControlValueAccessor {
  ngControl: NgControl;
  onChange: (value: any) => void;
  onTouch: () => void;
  disabled: boolean;
  _value: any;

  constructor(ngControl: NgControl) {
    this.ngControl = ngControl;
    ngControl.valueAccessor = this;
  }

  get value() {
    return this._value;
  }

  set value(v: any) {
    this._value = v;
    if (this.onChange) {
      this.onChange(v);
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
