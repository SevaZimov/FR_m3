import { CanDeactivateFn } from '@angular/router';
import { TasksComponent  } from '../pages/tasks/tasks.component';

export const leaveGuard: CanDeactivateFn<TasksComponent> = () => {
  return confirm('Вы уверены, что хотите покинуть страницу? Несохраненные данные будут потеряны!');
};