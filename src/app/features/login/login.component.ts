import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public username: string = '';
  public password: string = '';

  public constructor() {}

  public onSubmit(form: NgForm): void {
    if (form.valid) {
      const loggedIn = this.authService.login(this.username, this.password);

      if (loggedIn) {
        this.router.navigate(['/dashboard']); // Redirect to dashboard or home
      } else {
        alert('Invalid credentials');
      }
    }
  }

  public onForgotPassword(): void {
    console.log('Redirect to forgot password');
  }

  public onSignUp(): void {
    console.log('Redirect to sign up');
  }
}
