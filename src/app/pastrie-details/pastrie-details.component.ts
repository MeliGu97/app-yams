import { Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { List, Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnChanges {
  @Input() pastrie?: Pastrie;
  @Input() enableChoiceBt: boolean = true;
  ingredientsLists?: string[];
  @Output() changePreference: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    INGREDIENTS_LISTS.forEach(ingredient => {
      if(this.pastrie?.id === ingredient.id) {
        this.ingredientsLists = ingredient.list
      }
    }) 
  }

  // PastrieDetailsComponent
  preference(id: string | undefined) {
    if(id) this.changePreference.emit(id);// émettre l'id de la pâtisserie vers le parent
  }
}
