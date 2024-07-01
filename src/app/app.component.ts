import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <header class="bg-base-300 ">
      <div class="title flex h-20 justify-start xs:justify-center w-full p-2">
        <img class="p-2 hidden xs:block" src="{{ logo }}" />
        <div class="xs:hidden flex justify-self-end p-2 ">
          <div class="dropdown self-center bg-slate-100 rounded-btn ">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm bg-slate-100 text-stone-800 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <a class="btn btn-ghost text-xl" routerLink="/">Accueil</a>
              <a class="btn btn-ghost text-xl" routerLink="/rules">Règles</a>
              <a class="btn btn-ghost text-xl" routerLink="/wheel">Roue</a>
              <a class="btn btn-ghost text-xl" routerLink="/resources"
                >Ressources</a
              >
              <a class="btn btn-ghost text-xl" routerLink="/contact">Contact</a>
            </ul>
          </div>
        </div>
        <a href="/"
          ><h1 class="text-5xl xs:text-7xl font-['AmaticSC'] self-center">
            {{ title }}
          </h1>
        </a>
        <img class="p-2 " src="{{ logo }}" />
      </div>

      <div class="navbar hidden xs:flex flex-row justify-center w-full">
        <a class="btn btn-ghost text-xl" routerLink="/">Accueil</a>
        <a class="btn btn-ghost text-xl" routerLink="/rules">Règles</a>
        <a class="btn btn-ghost text-xl" routerLink="/wheel">Roue</a>
        <a class="btn btn-ghost text-xl" routerLink="/resources">Ressources</a>
        <a class="btn btn-ghost text-xl" routerLink="/contact">Contact</a>
      </div>
      <!-- <a routerLink="/wheel">Wheel</a>
    <a routerLink="/rules">Rules</a>-->
    </header>
    <main class="bg-base-100">
      <router-outlet />
    </main>
    <footer
      class="footer xs:grid xs:grid-cols-4 items-center p-4 bg-base-300 text-neutral-content m-t-10"
    >
      <aside class="items-center grid-flow-col  xs:col-span-2">
        <img class="p-2 h-20" src="{{ logo }}" />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav
        class="grid-flow-col gap-4 justify-self-center xs:place-self-center xs:justify-self-end xs:col-span-2"
      >
        <a target="_blank" href="https://discord.gg/RFp3pKV2ZH"
          ><svg
            width="24"
            height="24"
            viewBox="0 -28.5 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                fill="#5865F2"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
        </a>
      </nav>
    </footer>
  `,
})
export class AppComponent {
  title = 'La Bagarre !';
  logo = '../assets/img/logo.png';
}
