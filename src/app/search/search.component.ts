import { Component } from '@angular/core';

import { PastrieService } from '../pastrie.service'
import { NgForm } from '@angular/forms';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private pastrieService: PastrieService) {}
    // Ici une propriété pour stocker la valeur du champ de recherche
    searchResults: Pastrie[] = []; 

    // Pour traiter les données du formulaire 
    onSubmit(form: NgForm): void {
      if (form.valid) {
        const searchWord = form.value.word;
        this.searchResults = this.pastrieService.searchPastriesByName(searchWord);
      } else {
        // si le formulaire n'est pas valide
        console.log('Le formulaire n\'est pas valide.');
        
      }
    }
}
