import { Component } from '@angular/core';
import {Student,dataset} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 Studentdata: Array<Student> = dataset;
}
