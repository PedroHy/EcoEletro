import { Component, Input } from '@angular/core';
import { Local } from '../../../../interfaces/Local';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {
  @Input() local?: Local = undefined
}
