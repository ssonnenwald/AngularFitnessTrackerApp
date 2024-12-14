import { Routes } from '@angular/router';
import { AppLayoutComponent } from './features/app-layout/app-layout.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route redirects to login
  { path: 'login', component: LoginComponent }, // Login page
  {
    path: '', // Parent route for authenticated sections
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      }, // Lazy-loaded dashboard
      {
        path: 'calendar',
        loadComponent: () =>
          import('./features/calendar/calendar.component').then(
            (m) => m.CalendarComponent
          ),
      }, // Lazy-loaded calendar
      {
        path: 'goals',
        loadComponent: () =>
          import('./features/goals/goals.component').then(
            (m) => m.GoalsComponent
          ),
      }, // Lazy-loaded goals
    ],
  },
  { path: '**', redirectTo: 'login' }, // Redirect unmatched routes to login
];
