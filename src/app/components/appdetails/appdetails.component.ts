import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-appdetails',
  templateUrl: './appdetails.component.html',
  styleUrls: ['./appdetails.component.css'],
})
export class AppdetailsComponent implements OnInit {
  category = new FormControl('');
  rating = new FormControl('');
  filterParams = {};

  // filterForm = new FormGroup({
  //   category: new FormControl(''),
  //   rating: new FormControl(''),
  // });
  constructor(private service: FilterService) {}
  categoryList = [];
  ratingList = [1, 2, 3, 4, 5];
  dataSource: any;
  displayedColumns = [];
  data;

  ngOnInit(): void {
    this.getCategory();
    this.getUserData();
  }

  getCategory() {
    this.service.getCat().subscribe((res) => {
      this.data = res;
      for (var list in this.data) {
        this.categoryList.push(this.data[list]['category']);
      }
    });
  }

  getUserData() {
    this.service.getAppData().subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      for (var column in this.dataSource.filteredData[0]) {
        if (column != '_id' && column != 'id') {
          this.displayedColumns.push(column);
          // console.log('column name', this.data);
        }
      }
    });
  }

  setParams(): boolean {
    if (this.category.value != '') {
      this.filterParams['Category'] = this.category.value;
    }

    if (this.rating.value != '') {
      this.filterParams['Rating'] = { $gte: this.rating.value };
    }
    return true;
  }
  handleFilter() {
    if (this.setParams()) {
      console.log('column name', this.filterParams);
      this.service.getAppFilterData(this.filterParams).subscribe((res) => {
        this.data = res;
        this.dataSource = new MatTableDataSource(this.data);
      });
    }
  }
}
