import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CategoryService } from '../../services/category.service';
import { SuperCategory } from '../../interfaces/category.interface';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit{
  constructor(private sCatalog: CategoryService) {}
  ngOnInit(): void {
  }

}
