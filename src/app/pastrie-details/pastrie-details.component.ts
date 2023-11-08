import { Component, Input, OnInit} from '@angular/core';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {
  @Input() pastrie?: Pastrie;

  constructor() { }

  ngOnInit() {
      console.log(this.pastrie); // pour l'instant c'est undefined ... C'est normal
  }
}
