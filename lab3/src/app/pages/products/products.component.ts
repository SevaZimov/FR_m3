import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ItalicDirective } from '../../directives/italic.directive';



@Component({
  selector: 'app-products',
  template: `
    <h2>Товары</h2>
    <div *ngFor="let product of products">
      {{ product.name }} - {{ product.price }}
    </div>
    <p appItalic>Проверка директивы</p>
  `,
  standalone: true,
  imports: [CommonModule, ItalicDirective]
})

export class ProductsComponent {
  products: any[] = [];
  
  constructor(private dataService: DataService) {
    this.dataService.getProducts().subscribe(data => {
      this.products = data as any[];
    });
  }
}