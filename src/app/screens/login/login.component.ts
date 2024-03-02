import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cnpj: string = ""
  password: string = ""

  constructor(private authService: AuthService, private router: Router) { }

  getCnpj(cnpj: string) {
    this.cnpj = cnpj
  }

  getPassword(password: string) {
    this.password = password
  }

  buttonHandler() {
    this.authService.singIn(this.cnpj, this.password).then(() => this.router.parseUrl('/enterprise'))
  }
}
