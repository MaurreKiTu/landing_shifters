import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="footer xs:grid xs:grid-cols-4 items-center p-4 bg-base-300 text-neutral-content m-t-10"
    >
      <aside class="items-center grid-flow-col  xs:col-span-2">
        <img class="p-2 h-20" src="{{ logo }}" />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  `,
})
export class FooterComponent {
  title = '';
  logo = '../assets/img/logo.png';
}
