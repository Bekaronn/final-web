import { Component, Input, OnInit } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {NgForOf} from "@angular/common";
import {Category, Product, RealProduct, products} from "../../../interfaces/product.interface";
import {ProductService} from "../../../services/product.service";
import {RouterLink} from "@angular/router";
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bed-sheets',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './bed-sheets.component.html',
  styleUrl: './bed-sheets.component.scss'
})
export class BedSheetsComponent implements OnInit{
  products: RealProduct[] = [];
  categories: Category[] = [];
  gallery: string[]

  @Input() ParentCategory: any[];
  constructor(private bedSetService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategoriesByMainCategory(6);
  }

  getCategoriesByMainCategory(id: number){
    this.categoryService.getCategoryByMainCategory(id.toString()).subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }

  getProductsByCategory(id:number){
    console.log(id)
    this.categoryService.getProductsByCategories(id.toString()).subscribe(
      (data) => {
        this.products = data;
      }
    )
  }

  getPhoto(product: RealProduct){
    this.gallery = product.image.split(", ");
    console.log(this.gallery[0])
    return this.gallery[0]
  }
}
