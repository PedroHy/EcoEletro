import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() exit = new EventEmitter<any>()
  @Output() create = new EventEmitter<{ name: string, address: string }>()

  localName: string = ""
  address: string = ""

  buttonHandler() {
    this.create.emit({
      name: this.localName,
      address: this.address
    })
  }

  exitClickHandler() {
    this.exit.emit()
  }
}
