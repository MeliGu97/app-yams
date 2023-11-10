import { Component, EventEmitter, Output } from '@angular/core';

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
    searchWord: string = '';
    @Output() searchChange = new EventEmitter<string>();

    // Pour traiter les données du formulaire 
    onSubmit(form: NgForm): void {
      if (form.valid) {
        const searchWord = form.value.word;
        this.searchResults = this.pastrieService.getPastrieByName(searchWord);
      } else {
        // si le formulaire n'est pas valide
        console.log('Le formulaire n\'est pas valide.');
        //form.errors;
      }
    }

    onSearchChange(event: string): void {
      this.searchChange.emit(event);
    }
}