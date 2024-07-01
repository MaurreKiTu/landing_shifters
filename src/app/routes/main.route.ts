import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  headline: string;
  short: string;
  content: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="intro flex flex-row justify-center xs:m-10 ">
      <div class="card w-full m-4 xs:w-2/3 xs:m-0 bg-slate-100 text-stone-800">
        <div class="card-body">
          <h2 class="card-title self-center">La Bagare en bref</h2>
          <br />
          <p class="text-center">
            ⏰10 min -👥 2-6 - 🃏 1 jeu de cartes classique
          </p>
          <br />
          <p class="text-justify">
            La bagarre est un jeu rapide de combat. Le but est de rester en vie
            ! Si c'est votre première partie, on recommande de jouer d’abord
            avec les règles de base, puis d’ajouter les personnages lorsque vous
            avez pris le jeu en main.
          </p>
        </div>
      </div>
    </div>

    <div class="news">
      <h1 class="text-5xl font-['AmaticSC'] m-5 flex justify-center">News</h1>
      <div
        class="cards grid gap-2 grid-cols-1 md:gap-3 md:grid-cols-4 lg:gap-4 lg:grid-cols-5 mx-5 xs:m-12  "
      >
        <div
          *ngFor="let article of news; index as i; first as isFirst"
          [ngClass]="{ 'lg:col-start-2': i % 3 == 0 }"
          class="card bg-stone-300 text-stone-800 shadow-xl cursor-pointer mb-4"
          (click)="onClickArticle(article)"
        >
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ article.headline }}
              <div class="badge badge-primary" *ngIf="isFirst">NEW</div>
            </h2>
            <p>{{ article.short }}</p>
          </div>
        </div>
      </div>
      <div>
        <dialog id="modal" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-center mb-4">
              {{ currentNews.headline }}
            </h3>
            <p class="text-justify" [innerHTML]="currentNews.content"></p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  `,
})
export default class MainRoute {
  title = 'main-route';
  modal = document.getElementById('modal') as HTMLDialogElement;
  news = [
    {
      headline: 'titre',
      short: 'résumé',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus mi mollis sem facilisis lacinia. Sed tincidunt sagittis ligula vitae tempus. Nulla et lacus lorem. Fusce cursus elit sit amet ipsum consequat, in imperdiet velit venenatis. Sed nulla turpis, condimentum id purus ut, faucibus porta ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin et purus suscipit, euismod lorem in, fermentum sapien. Aenean nec quam dictum, euismod nisl non, porttitor magna. Morbi hendrerit varius euismod. Nunc sodales nisl id urna interdum, non dictum quam rhoncus. Quisque ut eros nisi. Aliquam in cursus ligula, nec porttitor turpis.Proin et efficitur metus. Aliquam elementum est efficitur rhoncus imperdiet. Cras ornare tellus in velit commodo efficitur. Fusce porta ac sem nec maximus. Vestibulum fermentum lectus quis ex ultrices, eu tempor nulla maximus. Ut ac tincidunt felis. Cras ac nisl enim. Vivamus volutpat ultricies quam, nec blandit urna cursus et. Pellentesque eu nunc varius, blandit elit non, aliquet risus.Morbi ex erat, tempor id imperdiet et, vulputate ut nulla. Quisque est augue, feugiat vitae eleifend quis, vestibulum nec ipsum. Nullam mollis in ligula porta convallis. Vestibulum fermentum nisl ut ipsum viverra, eget rhoncus dolor auctor. Vivamus ut orci ac lorem tempor molestie vel a nibh. Mauris facilisis eleifend nulla a rhoncus. Integer in turpis in libero dictum venenatis id in augue. Integer tempus rhoncus interdum. Aliquam mi odio, posuere quis accumsan sit amet, laoreet eget leo. Donec imperdiet venenatis justo scelerisque venenatis. Quisque venenatis tristique ex sit amet rutrum. Nulla vel leo porttitor, laoreet enim laoreet, viverra lectus.In ultricies erat et mattis commodo. Mauris sit amet tortor commodo, vulputate arcu quis, pulvinar mi. Sed a dolor at odio fringilla facilisis. Donec scelerisque arcu gravida purus hendrerit mattis. Pellentesque varius magna maximus lorem dapibus ultrices. Aliquam quis leo eget massa condimentum viverra. Sed tincidunt fermentum arcu et placerat. Curabitur tincidunt, arcu eu tempor cursus, mauris ante ultrices tortor, vitae scelerisque turpis nisl vitae leo. Aliquam sed consequat nunc. Nullam quis fringilla purus. Curabitur ut sapien e',
    },
    {
      headline: 'titre',
      short: 'résumé',
      content: 'lorem <i>ipsum2</i>',
    },
    {
      headline: 'titre',
      short: 'résumé',
      content: 'lorem <i>ipsum3</i>',
    },
    {
      headline: 'titre',
      short: 'résumé',
      content: 'lorem <i>ipsum3</i>',
    },
  ] as Article[];
  ngOnInit() {
    this.modal = document.getElementById('modal') as HTMLDialogElement;
  }
  currentNews = {} as Article;
  onClickArticle(content: Article) {
    this.currentNews = content;
    console.log(this.currentNews.content);
    this.openModal();
  }
  openModal() {
    this.modal.showModal();
  }
}
