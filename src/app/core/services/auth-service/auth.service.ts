import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  private router: Router = inject(Router);

  constructor() {}

  public login(username: string, password: string): boolean {
    // Replace with API call
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;

      localStorage.setItem('token', 'fake-jwt-token');

      return true;
    }

    return false;
  }

  public logout(): void {
    this.isAuthenticated = false;

    localStorage.removeItem('token');

    this.router.navigate(['login']);
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
