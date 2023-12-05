import { Injectable } from '@angular/core';
import { PASTRIES } from '../mock-pastries';

@Injectable({
  providedIn: 'root',
})
export class PastriesService {
  private pastriesPerPage = 3;

  getPastries(page: number): any[] {
    const startIndex = (page - 1) * this.pastriesPerPage;
    const endIndex = startIndex + this.pastriesPerPage;
    return PASTRIES.slice(startIndex, endIndex);
  }
}
