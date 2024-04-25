import {Component, Input, OnInit} from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {NgForOf} from "@angular/common";
import {Category, Product, products, RealProduct} from "../../../interfaces/product.interface";
import {ProductService} from "../../../services/product.service";
import {RouterLink} from "@angular/router";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-pajamas',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './pajamas.component.html',
  styleUrl: './pajamas.component.scss'
})
export class PajamasComponent implements OnInit{
  products: RealProduct[] = [];
  categories: Category[] = [];
  gallery: string[]

  @Input() ParentCategory: any[];
  constructor(private bedSetService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategoriesByMainCategory(8);
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
