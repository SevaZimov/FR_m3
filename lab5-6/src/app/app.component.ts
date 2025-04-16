import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Таски</a>
      <a routerLink="/products">Товары</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}