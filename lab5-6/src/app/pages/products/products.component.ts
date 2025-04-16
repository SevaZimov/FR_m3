import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ItalicDirective } from '../../directives/italic.directive';
import { SortPipe } from '../../pipes/sort.pipe';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-products',
  template: `
    <h2>Товары</h2>
    
    <div class="controls">
      <button (click)="toggleSortDirection()">
        Сортировать по цене {{ sortDirection === 'asc' ? '↑' : '↓' }}
      </button>
      <button (click)="loadProducts()" [disabled]="loading">
        Обновить список
      </button>
    </div>
    
    <div *ngIf="loading" class="loading">Загрузка данных...</div>
    
    <div *ngIf="error" class="error">
      {{ error }}
    </div>
    
    <div *ngIf="!loading && !error">
      <div *ngFor="let product of products | sort:'price':sortDirection" class="product-item">
        <h3>{{ product.name }}</h3>
        <p>Цена: {{ product.price}}</p>
      </div>
      
      <div *ngIf="products.length === 0" class="empty">
        Нет товаров для отображения
      </div>
    </div>
    
    <p appItalic>Проверка директивы</p>
  `,
  
  standalone: true,
  imports: [CommonModule, ItalicDirective, SortPipe]
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = false;
  error: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = null;
    
    this.dataService.getProducts()
      .pipe(
        catchError(err => {
          this.error = 'Ошибка загрузки товаров. Пожалуйста, попробуйте позже.';
          console.error('Ошибка:', err);
          return of([]);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(products => {
        this.products = products;
      });
  }

  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
}