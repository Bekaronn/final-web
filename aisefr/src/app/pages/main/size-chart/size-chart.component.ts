import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {FooterComponent} from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-size-chart',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './size-chart.component.html',
  styleUrl: './size-chart.component.scss'
})
export class SizeChartComponent {

}
