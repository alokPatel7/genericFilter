import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-userfilter',
  templateUrl: './userfilter.component.html',
  styleUrls: ['./userfilter.component.css'],
})
export class UserfilterComponent implements OnInit {
  selectedValue = new FormGroup({
    selectCity: new FormControl(''),
  });
  dataSource: any;
  data: any;
  displayedColumns = [];
  optionList = [];
  filterparams = {};
  constructor(private service: FilterService) {}

  ngOnInit(): void {
    this.service.getUserData().subscribe((res) => {
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
    this.selectCity();
  }

  selectCity() {
    this.service.getCity().subscribe((city) => {
      this.data = city;
      for (var list in this.data) {
        this.optionList.push(this.data[list]['city']);
        // console.log('list litem', this.optionList[list]['city']);
      }
      // console.log('category list', this.optionList);
    });
  }

  setFilterParams() {
    if (this.selectedValue.controls.selectCity.value != '') {
      this.filterparams['City'] = this.selectedValue.controls.selectCity.value;
      return true;
    }
    return false;
  }
  handleFilter() {
    if (this.setFilterParams()) {
      console.log(this.filterparams);
      this.service.getFilterData(this.filterparams).subscribe((res) => {
        this.data = res;
        this.dataSource = new MatTableDataSource(this.data);
        // console.log('dataSource', this.dataSource.filteredData);
      });
    }
    // console.log('filter data', this.selectedValue.controls.selectCity.value);
  }
}
