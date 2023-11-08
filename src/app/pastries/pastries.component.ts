import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie, List } from '../pastrie';
import { PASTRIES } from '../mock-pastries';

@Component({
    selector: 'app-pastries',
    templateUrl: './pastries.component.html',
    styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
    titlePage: string = "Page principale : liste des pâtisseries à gagner";
    pastries: Pastrie[] = PASTRIES;
    selectedPastrie?: Pastrie;
    
    constructor() { }
    
    ngOnInit() {
    }
    

    // Récupérer le nom de la patisserie sélectionnée au clic sur un btn
    OnSelect(pastrie: Pastrie) {
      console.log(pastrie);
      this.selectedPastrie = pastrie;
    }
}
