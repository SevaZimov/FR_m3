import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { authGuard } from './guards/auth.guard';
import { leaveGuard } from './guards/leave.guard';
import { TasksComponent } from './pages/tasks/tasks.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: '', component: TasksComponent }
];