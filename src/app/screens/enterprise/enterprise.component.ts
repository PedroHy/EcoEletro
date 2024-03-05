import { Component } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../interfaces/Enterprise';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.css'
})
export class EnterpriseComponent {

  enterprise: Enterprise = {};

  constructor(private enterpriseService: EnterpriseService, private authService: AuthService, private router: Router) {
    enterpriseService.getEnterprise(String(localStorage.getItem("user"))).then((enterprise) => {
      this.enterprise = enterprise;
    });
  }

  logOut = ()=>{
    this.authService.signOut()
    this.router.navigateByUrl("/")
  }

}
