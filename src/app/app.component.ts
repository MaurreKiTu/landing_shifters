import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="bg-bg bg-cover">
      <header-comp> </header-comp>
      <main>
        <router-outlet />
      </main>
      <footer-comp> </footer-comp>
    </div>
  `,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  logo = '../assets/img/logo.png';
}
