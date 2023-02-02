import { Component,QueryList,ViewChildren } from '@angular/core';
import{
  SortableHeaderDirective,
  SortEvent,
  compare} from './sortable-header';

import {Student,dataset} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:Array<Student> = dataset;
  Studentdata: Array<Student> = dataset;
  @ViewChildren(SortableHeaderDirective)
  headers!: QueryList<SortableHeaderDirective>;

  
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting Countries
    if (direction === '' || column === '') {
      this.Studentdata = this.data;
    } else {
      this.Studentdata = [...this.data].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}