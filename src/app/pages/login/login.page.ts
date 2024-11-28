import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';
  mensajeError: string | null = null;

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario === '' || this.contrasena === '') {
      this.mensajeError = 'Por favor, complete todos los campos';
    } else if (this.usuario === 'admin' && this.contrasena === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }
}
