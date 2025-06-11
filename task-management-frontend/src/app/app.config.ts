import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { UpcomingTasksComponent } from './components/upcoming-tasks/upcoming-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: UpcomingTasksComponent
  }
];

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
};
