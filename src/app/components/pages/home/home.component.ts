import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../main-header/main-header.component';
import { MatCardModule } from '@angular/material/card';
import { IconTransferComponent } from '../../icon-transfer/icon-transfer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainHeaderComponent,
    MatButtonModule,
    MatCardModule,
    IconTransferComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
