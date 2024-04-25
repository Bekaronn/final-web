import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
