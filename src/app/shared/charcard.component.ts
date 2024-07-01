import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from './character.component';

@Component({
  selector: 'charcard-comp',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'card bg-stone-300 shadow-xl' },
  template: `
    <h2 class="card-title justify-center bg-slate-600 rounded-t-lg p-2 ">
      <img
        *ngIf="this.showImgForced || character.forceMiniImg"
        class="w-5"
        src="../assets/img/{{ character.img }}"
        alt="{{ character.name }}"
      />
      {{ character.name }}
      <img
        *ngIf="this.showImgForced || character.forceMiniImg"
        class="w-5"
        src="../assets/img/{{ character.img }}"
        alt="{{ character.name }}"
      />
    </h2>
    <div class="flex flex-row items-center h-full">
      <div *ngIf="character.showImg" class="w-1/3 p-6 hidden sm:block">
        <img
          class="max-h-full "
          src="../assets/img/{{ character.img }}"
          alt="{{ character.name }}"
        />
      </div>
      <div class="card-body w-2/3 text-black">
        <p [innerHTML]="character.description"></p>
      </div>
    </div>
  `,
})
export class CharcardComponent {
  title = '';

  @Input() character = {} as Character;

  showImgForced: boolean = window.innerWidth <= 768;
}
