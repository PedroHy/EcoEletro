import { Component } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../interfaces/Enterprise';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { Local } from '../../interfaces/Local';
import { LocalService } from '../../services/local.service';

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
  locals: Local[] = []

  constructor(private enterpriseService: EnterpriseService, private authService: AuthService, private router: Router, private localService: LocalService) {
    enterpriseService.getEnterprise(String(localStorage.getItem("user"))).then((enterprise) => {
      this.enterprise = enterprise;

      if (enterprise.uid) {
        localService.getLocalsByEnterprise(enterprise.uid).then(locals => {
          this.locals = locals
        })
      }
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

  createLocal(local: Local) {
    this.showModal = false

    this.localService.createLocal({
      uid: this.enterprise.uid,
      name: local.name,
      cep: local.cep,
      address: local.address,
      city: local.city,
      state: local.state
    }).then(() => {
      if (!this.enterprise.uid) {
        return
      }
      this.localService.getLocalsByEnterprise(this.enterprise.uid).then(locals => {
        this.locals = locals
      })
    })
  }

  deleteLocal(id: string | undefined) {
    if (!id) {
      return
    }
    this.localService.removeLocal(id)
  }
}
