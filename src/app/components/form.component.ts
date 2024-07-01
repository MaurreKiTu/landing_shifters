import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-comp',
  standalone: true,
  imports: [CommonModule],
  template: ` formulaire `,
})
export class ContactComponent {
  title = '';
}
