import { CanDeactivateFn } from '@angular/router';
import { ProfileComponent } from '../pages/profile/profile.component';

export const leaveGuard: CanDeactivateFn<ProfileComponent> = () => {
  return confirm('Вы уверены, что хотите покинуть страницу? Несохраненные данные будут потеряны!');
};