import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  
  return confirm('Вы уверены, что хотите перейти на эту страницу?');
};