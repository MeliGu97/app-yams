import { Pipe, PipeTransform, Input} from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastryTagColorPipe implements PipeTransform {
    // cssClass: string;

    // Ici la logique pour déterminer la classe CSS en fonction de la valeur de 'tag'.
    // Par exemple, si 'tag' est 'yummy', ça renvoie la classe 'yummy-badge', sinon ça renvoye une classe par défaut.
    transform(toto: string): string {
      let cssClass: string;
  
      switch (toto) {
        case 'yummy':
          cssClass = 'yummy-badge';
          break;
        case 'sucré':
          cssClass = 'sucré-badge';
          break;
        case 'dessert':
          cssClass = 'dessert-badge';
          break;
        case 'chocolat':
          cssClass = 'chocolat-badge';
          break;
        case 'framboise':
          cssClass = 'framboise-badge';
          break;
        case 'poire':
          cssClass = 'poire-badge';
          break;
        case 'fruit':
          cssClass = 'fruit-badge';
          break;
        case 'banane':
          cssClass = 'banane-badge';
          break;
        default:
          cssClass = 'default-badge';
      }
  
      return cssClass;
    }
  }