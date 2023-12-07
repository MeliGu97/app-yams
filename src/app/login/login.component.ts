import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    // Pour authentifier l'utilisateur
    const isAuthenticated = this.authService.auth(this.email, this.password);

    if (isAuthenticated) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'L\'authentification a échoué. Veuillez vérifier vos informations de connexion.';
    }
  }
}
