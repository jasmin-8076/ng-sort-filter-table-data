import { Pipe, PipeTransform } from '@angular/core';
import { Student} from './data';

@Pipe({ name: 'students' })
export class StudentPipe implements PipeTransform {
  transform(values: Student[], filter: string): Student[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: Student) => {
      const nameFound =
        value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const genderFound =
        value.gender.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

      if (nameFound || genderFound) {
        return value;
      }
    });
  }
}