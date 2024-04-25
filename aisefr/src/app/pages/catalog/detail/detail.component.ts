import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {FooterComponent} from "../../../shared/footer/footer.component";
import {CommonModule, NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Product, products, RealProduct} from "../../../interfaces/product.interface";
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgForOf,
    CommonModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  count = 1
  photo: string;

  productId: string | null;
  product: RealProduct;
  gallery: string[]
  load = false;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.productId != null) {
      this.productService.getProductsById(this.productId).subscribe(
        data => this.product = data
      )
      this.loadGalleries()
      this.photo = this.gallery[0]
      this.load = true;
    }
  }

  minusCount(){
    if(this.count > 1){
      this.count-=1;
    }
  }

  plusCount(){
    if(this.count < 10){
      this.count+=1;
    }
  }

  setPhoto(photo: string){
    this.photo = photo
  }

  isPhotoSelected(photo: string) {
    return this.photo === photo;
  }

  loadGalleries(){
    this.gallery = this.product.image.split(", ");
    console.log(this.gallery[0])
  }
}
