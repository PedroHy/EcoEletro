import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
    console.log(this.cnpj, this.password)
    this.authService.singIn(this.cnpj, this.password).then(() => this.router.navigateByUrl('/enterprise'))
  }
}
