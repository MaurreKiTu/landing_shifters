import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movies-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex grid-container w-full justify-center ">
      <div
        class="grid lg:w-2/3 xl:w-1/3 md:w-full px-8 md:px-5 grid-cols-6 items-center justify-center"
      >
        <div
          class="p-1"
          *ngFor="let movie of movies; let index = index; let isFirst = first"
        >
          <img class="" src="../assets/img/movies/{{ index }}.jpg" />
        </div>
        <!-- <img class="" src="../assets/img/movies/dots.png" /> -->
      </div>
    </div>
  `,
})
export class MoviesComponent {
  title = '';
  movies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
