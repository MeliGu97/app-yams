import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service'
@Component({
    selector: 'app-pastries',
    templateUrl: './pastries.component.html',
    styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
    titlePage: string = "Liste des pâtisseries à gagner";
    pastries: Pastrie[];
    selectedPastrie?: Pastrie;
    priority:string[] = [];
    canChoice: boolean = true;
    searchResults: any;
    
    constructor(private pastrieService: PastrieService) { 
      // dans le construtor plutot que ngOnInit pour que l'attribut de class pastrie soit initialisé
      this.pastries = pastrieService.getPastries()
    }
    
    ngOnInit() { console.log("le nombre de patisserie :",this.pastrieService.count()) }
    

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