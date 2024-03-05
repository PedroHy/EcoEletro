import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { EnterpriseService } from '../../services/enterprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthService, private enterpriseService: EnterpriseService, private router: Router) { }
  name: string = ""
  email: string = ""
  password: string = ""

  register = () => {
    this.authService.singUp(this.email, this.password).then((uid)=>{
      this.enterpriseService.createEnterprise({name: this.name, email: this.email, uid: uid}).then(()=>{
        this.router.navigateByUrl('/enterprise')
      });
    })
  }
}
