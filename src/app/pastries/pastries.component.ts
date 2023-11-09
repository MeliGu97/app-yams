import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie, List } from '../pastrie';
import { PASTRIES, INGREDIENTS_LISTS } from '../mock-pastries';
import { bindCallback } from 'rxjs';

@Component({
    selector: 'app-pastries',
    templateUrl: './pastries.component.html',
    styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
    titlePage: string = "Page principale : liste des pâtisseries à gagner";
    pastries: Pastrie[] = PASTRIES;
    selectedPastrie?: Pastrie;
    priority:string[] = [];
    canChoice: boolean = true;
    
    constructor() { }
    
    ngOnInit() { }
    

    // Récupérer la patisserie sélectionnée au clic sur un btn
    OnSelect(pastrie: Pastrie) {
      console.log(pastrie);
      this.selectedPastrie = pastrie;
    };

    changeParentPreference(event:string){
      this.priority?.push(event);
      if(this.priority.length === 3) {
        this.canChoice = false;
      }
    }
}