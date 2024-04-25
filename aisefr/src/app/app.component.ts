import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainpageComponent } from './pages/main/mainpage/mainpage.component';
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainpageComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aisefr';
}
