import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '../components/movies.component';

@Component({
  standalone: true,
  imports: [CommonModule, MoviesComponent],
  template: ` <movies-comp class="my-8" />
    <div class="flex justify-center flex-col font-['Gomarice'] text-3xl">
      <div class="flex justify-center flex-row text-button m-2">
        <span class="fi fi-fr"></span> 
        <div *ngFor="let ville of villes; let index = index">{{ ville }}</div>
      </div>
      <div class="flex justify-center text-neutral-50 mb-4">
        15-16-17 Novembre 2024
      </div>
      <div class="flex justify-center text-button m-2">
        <span class="fi fi-be"></span> Bruxelles
      </div>
      <div class="flex justify-center text-neutral-50">
        25-26-27-28 Novembre 2024
      </div>
    </div>
    <nav class="flex flex-row gap-4 justify-self-center justify-center">
      <a *ngFor="let social of socials" href="{{ social.lien }}">
        <img
          class="p-2"
          src="../assets/img/socials/picto-{{ social.image }}.png"
        />
      </a>
    </nav>`,
})
export default class MainRoute {
  title = 'main-route';
  villes = ['Paris-', 'Angers-', 'Lyon-', 'Marseille'];
  ngOnInit() {}
  socials = [
    {
      lien: '',
      image: 'facebook',
    },
    {
      lien: '',
      image: 'instagram',
    },
    {
      lien: '',
      image: 'youtube',
    },
  ];
}
