import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { leaveGuard } from './guards/leave.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'profile/:id', component: ProfileComponent, canDeactivate: [leaveGuard] }
];