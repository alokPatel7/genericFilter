import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor(private service: FilterService) {}
  selectedValue = new FormGroup({
    selectRating: new FormControl(''),
  });
  path = { obj1: 'products', obj2: 'rating' };
  label = 'Select Rating';
  dataSource: any;
  displayedColumns = [];
  optionList;
  data;

  ngOnInit(): void {
    this.service.getData(this.path.obj1).subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      // console.log('dataSource', this.dataSource.filteredData);
      for (var column in this.dataSource.filteredData[0]) {
        if (column != '_id' && column != 'id') {
          this.displayedColumns.push(column);
          // console.log('column name', column);
        }
      }
    });
    this.service.getCategory(this.path.obj2).subscribe((category) => {
      this.optionList = category;
      console.log('rating list', this.optionList);
    });
  }

  toggleUrl(path) {
    this.displayedColumns = [];
    this.optionList = [];
    if (path === 'user') {
      this.path.obj1 = 'user';
      this.path.obj2 = 'city';
      this.label = 'Select City';
      this.ngOnInit();
    } else {
      this.path.obj1 = 'products';
      this.path.obj2 = 'rating';
      this.label = 'Select Rating';
      this.ngOnInit();
    }
  }

  handleFilter() {
    let filterValue = this.selectedValue.controls.selectRating.value;
    this.service.filterData(filterValue).subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      // console.log('dataSource', this.dataSource.filteredData);
      // for (var column in this.dataSource.filteredData[0]) {
      //   if (column != '_id' && column != 'id') {
      //     this.displayedColumns.push(column);
      //     // console.log('column name', column);
      //   }
      // }
    });
  }
}
