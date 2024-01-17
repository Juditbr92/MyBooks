import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia',
  standalone: true
})
export class ReferenciaPipe implements PipeTransform {

  transform(value: number,): string {
    return `Ref - 301020${value}`;
  }

}
