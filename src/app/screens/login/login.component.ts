import { Component } from '@angular/core';

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

  getCnpj(cnpj: string) {
    this.cnpj = cnpj
  }

  getPassword(password: string) {
    this.password = password
  }

  buttonHandler() {
    console.log(this.cnpj, this.password)
  }
}
