import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero';

@Pipe({
  name: 'heroDetail'
})
export class HeroDetailPipe implements PipeTransform {
  transform(hero: Hero): string {
    return `${hero.name}`;
  }
}
