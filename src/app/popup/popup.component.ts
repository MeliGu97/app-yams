import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  template: `<p class="popup-content">{{ data.message }}</p>`,
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
