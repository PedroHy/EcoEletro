import { Component } from '@angular/core';
import { Local } from '../../interfaces/Local';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalComponent } from './components/local/local.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NavbarComponent, LocalComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  locals: Local[] = []
}
