import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../components/form.component';

@Component({
  standalone: true,
  imports: [CommonModule, ContactComponent],
  template: ` <form-comp /> `,
})
export default class ContactRoute {
  title = 'contact-route';
}
