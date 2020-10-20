import { forwardRef, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-genericfilter',
  templateUrl: './genericfilter.component.html',
  styleUrls: ['./genericfilter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericfilterComponent),
      multi: true,
    },
  ],
})
export class GenericfilterComponent implements OnInit {
  @Input() optionList: any;
  @Input() label: any;
  @Input() value: any;
  @Output() selectedItems = new EventEmitter();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fieldValue = '';

  writeValue(value: any): void {}

  propagateChange = (_: any) => {};

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  onChange(event): void {
    this.fieldValue = event;
    this.propagateChange(this.fieldValue);
  }
}
