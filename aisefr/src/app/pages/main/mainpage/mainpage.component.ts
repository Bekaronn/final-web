import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { BodyComponent } from '../body/body.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    BodyComponent,
    ReviewsComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
