import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private jsonServerUrl = `http://localhost:2000/`;
  private nodeServerUrl = `http://localhost:3000`;
  constructor(private http: HttpClient) {}

  getData(filterKey) {
    return this.http.get(`${this.jsonServerUrl}` + filterKey);
  }
  getCategory(categoryType) {
    return this.http.get(`${this.jsonServerUrl}` + categoryType);
  }
  filterData(data) {
    return this.http.get(`${this.jsonServerUrl}products?rating=${data}`);
  }

  getUserData() {
    return this.http.get(`${this.nodeServerUrl}/user`);
  }
  getAppData() {
    return this.http.get(`${this.nodeServerUrl}/appdata`);
  }

  getCity() {
    return this.http.get(`${this.nodeServerUrl}/city`);
  }

  getFilterData(filterparams: any) {
    console.log('service', filterparams);

    return this.http.get(`${this.nodeServerUrl}/filterdata`, {
      params: filterparams,
    });
  }
  getAppFilterData(filterparams: any) {
    console.log('service', filterparams);

    return this.http.get(`${this.nodeServerUrl}/appfilterdata`, {
      params: filterparams,
    });
  }
  getCat() {
    return this.http.get(`${this.nodeServerUrl}/category`);
  }
}
