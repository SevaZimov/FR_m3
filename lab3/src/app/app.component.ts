import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Главная</a>
      <a routerLink="/products">Товары</a>
      <a [routerLink]="['/profile', 1]">Профиль</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterLink, RouterOutlet]
})
export class AppComponent {}