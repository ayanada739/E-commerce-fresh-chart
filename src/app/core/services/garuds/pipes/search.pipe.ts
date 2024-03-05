import { product } from './../../../interfaces/user-data';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(product:product[],userWord:string): product[] {
    return product.filter((item)=>  item.title.toLowerCase().includes(userWord.toLowerCase()))
  }

}
