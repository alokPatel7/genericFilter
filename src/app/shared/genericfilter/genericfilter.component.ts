import { Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-genericfilter',
  templateUrl: './genericfilter.component.html',
  styleUrls: ['./genericfilter.component.css'],
})
export class GenericfilterComponent implements OnInit {
  @Input() optionList: any;
  @Input() label: any;
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

  onChange(): void {
    console.log('onchange');

    this.propagateChange(this.fieldValue);
  }
}
