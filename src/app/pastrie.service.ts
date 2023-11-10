import { Injectable, Input } from '@angular/core';
import { Pastrie, List } from './pastrie';
import { PASTRIES, INGREDIENTS_LISTS } from './mock-pastries';

@Injectable({
  providedIn: 'root' // Permet de définir la portée du service. Ici, le service sera disponible dans toute l'application
})
// c'est cette class qui sera exportée "PastrieService"
export class PastrieService {
  pastries: Pastrie[] = PASTRIES; 
  ingredientsLists?: List[] = INGREDIENTS_LISTS;

  constructor() { }

  getPastries() {
    return this.pastries.sort((pastrieA, pastrieB) => pastrieB.quantity - pastrieA.quantity);
  }

  getPastrie(id:string) {
    return this.pastries.find(pastrie => pastrie.id == id);
  }

  getPastrieIngredientsList(id : string){
    return this.ingredientsLists?.find(ingredient => ingredient.id == id)?.list;
  }

  count(){
    return this.getPastries().length;
  }

  getPastrieByName(name: string): Pastrie[] {
    return this.pastries.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }
}
