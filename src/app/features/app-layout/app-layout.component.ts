import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  ViewChild,
} from '@angular/core';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { NavLink } from '../../core/models/nav-link';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-layout',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterOutlet,
    MatIconModule,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent implements AfterViewInit {
  @ViewChild(MatSidenav) public sidenav!: MatSidenav;

  private destroyRef: DestroyRef = inject(DestroyRef);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private observer: BreakpointObserver = inject(BreakpointObserver);

  public navLinks: NavLink[] = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Calendar', route: '/calendar' },
    { label: 'Goals', route: '/goals' },
    { label: 'Reports', route: '/reports' },
    { label: 'Profile', route: '/profile' },
  ];

  public constructor() {}

  public ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
