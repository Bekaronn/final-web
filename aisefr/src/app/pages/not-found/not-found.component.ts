import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
