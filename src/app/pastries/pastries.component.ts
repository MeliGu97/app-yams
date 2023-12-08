import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';
import { trigger, state, style, transition, animate, keyframes  } from '@angular/animations';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ 
        transform: 'translateX(0%)', // arrive de la droite
        color: 'white', 
        borderRadius: '20px',
      })),
      state('closed', style({ 
        transform: 'translateX(-100%)', // Repart vers la gauche
        height: '0px', 
        opacity: 0, 
      })),
      transition('open <=> closed', [animate('0.5s')])
    ])
  ]
})
export class PastriesComponent implements OnInit {
  titlePage: string = "Liste des pâtisseries à gagner";
  pastries: Pastrie[];
  selectedPastrie?: Pastrie;
  priority: string[] = [];
  canChoice: boolean = true;
  searchResults: any;
  animationState: string = 'closed';

  // Pagination
  itemsPerPage = 3;
  currentPage = 1;
  totalItems: number;

  constructor(private pastrieService: PastrieService) {
    // dans le constructor plutôt que ngOnInit pour que l'attribut de class pastrie soit initialisé
    this.pastries = pastrieService.getPastries();
    // Initialisez le total des articles pour la pagination
    this.totalItems = this.pastries.length;
  }


  ngOnInit(): void {
    console.log("le nombre de patisserie :", this.pastrieService.count())
  }

  // Récupérer la patisserie sélectionnée au clic sur un btn
  OnSelect(pastrie: Pastrie) {
    console.log(pastrie);
    this.selectedPastrie = pastrie;
    this.animationState = (this.animationState === 'open') ? 'closed' : 'open'; // ici pour l'animation
  }

  changeParentPreference(event: string) {
    this.priority?.push(event);
    if (this.priority.length === 3) {
      this.canChoice = false;
    }
  }

  filtredPastries(searchWord: string): void {
    // Mettre à jour les pâtisseries affichées en fonction du mot de recherche
    this.pastries = this.pastrieService.getPastrieByName(searchWord);
    // Initialisez le total des articles pour la pagination après la recherche
    this.totalItems = this.pastries.length;
  }

  getDisplayedPastries() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.pastries.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
