import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="title flex flex-col  items-center justify-center w-full p-2 ">
      <div class=" p-2">
        <img class="p-2 " src="{{ logo }}" />
      </div>
      <div
        class="rounded-lg bg-button text-neutral-50 font-['Gomarice'] text-3xl px-5 pt-2 pb-1 align-text-bottom"
      >
        5e Edition
      </div>
    </div>
  `,
})
export class HeaderComponent {
  title = '';
  logo = '../assets/img/logo.png';
}
