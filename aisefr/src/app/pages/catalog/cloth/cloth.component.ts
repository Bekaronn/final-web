import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cloth',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        RouterLink
    ],
  templateUrl: './cloth.component.html',
  styleUrl: './cloth.component.scss'
})
export class ClothComponent {

}
