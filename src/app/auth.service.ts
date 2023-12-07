import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Auth: boolean = false;

  auth(email: string, password: string): boolean {
  // auth(email: string, password: string): Promise<any> {
    // Implémentez la logique de connexion
		this.Auth = true;
    return this.Auth;
  }

  logout(): void {
    this.Auth = false;
  }

  isAuth(): boolean {
    return this.Auth;
  }
}