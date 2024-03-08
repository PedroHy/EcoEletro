import { Component } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../interfaces/Enterprise';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.css'
})
export class EnterpriseComponent {
  showModal: boolean = false;
  enterprise: Enterprise = {};

  constructor(private enterpriseService: EnterpriseService, private authService: AuthService, private router: Router) {
    enterpriseService.getEnterprise(String(localStorage.getItem("user"))).then((enterprise) => {
      this.enterprise = enterprise;
    });
  }

  logOut = () => {
    this.authService.signOut()
    this.router.navigateByUrl("/")
  }

  buttonModalHandler() {
    this.showModal = true
  }

  exitFormHandler() {
    this.showModal = false
  }
}
