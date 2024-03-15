import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Local } from '../../../../interfaces/Local';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() exit = new EventEmitter<any>()
  @Output() create = new EventEmitter<Local>()

  localName: string = ""
  cep: string = ""
  address: string = ""
  state: string = ""
  city: string = ""

  buttonHandler() {
    this.create.emit({
      name: this.localName,
      address: this.address,
      cep: this.cep,
      city: this.city,
      state: this.state
    })
  }

  exitClickHandler() {
    this.exit.emit()
  }
}
