import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon-transfer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './icon-transfer.component.html',
  styleUrl: './icon-transfer.component.scss'
})
export class IconTransferComponent {

}
