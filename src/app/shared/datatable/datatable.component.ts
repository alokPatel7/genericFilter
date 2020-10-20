import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  @Input() displayedColumns: any;
  @Input() dataSource: any;

  constructor() {}

  ngOnInit(): void {}
}
