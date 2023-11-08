import { Component, Input, OnChanges} from '@angular/core';
import { List, Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnChanges {
  @Input() pastrie?: Pastrie;
  ingredientsLists?: string[];

  constructor() { }

  ngOnChanges() {
    INGREDIENTS_LISTS.forEach(ingredient => {
      if(this.pastrie?.id === ingredient.id) {
        this.ingredientsLists = ingredient.list
      }
    }) 
  }
}
