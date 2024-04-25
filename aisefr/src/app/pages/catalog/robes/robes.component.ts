import {Component, Input, OnInit} from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {ProductService} from "../../../services/product.service";
import {Category, products, RealProduct} from "../../../interfaces/product.interface";
import {CategoryService} from "../../../services/category.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-robes',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './robes.component.html',
  styleUrl: './robes.component.scss'
})
export class RobesComponent implements OnInit{
  products: RealProduct[] = [];
  categories: Category[] = [];
  gallery: string[]

  @Input() ParentCategory: any[];
  constructor(private bedSetService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategoriesByMainCategory(9);
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
