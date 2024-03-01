import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService){}

  getCnpj(cnpj: string) {
    this.cnpj = cnpj
  }

  getPassword(password: string) {
    this.password = password
  }

  buttonHandler() {
    //this.authService.singIn(this.cnpj, this.password).then(()=>console.log("foi"));
    console.log(this.cnpj, this.password)
  }
}
