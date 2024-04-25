import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { MainCategory } from '../../../interfaces/category.interface';
import { BedSheetsComponent } from '../bed-sheets/bed-sheets.component';
import { Category } from '../../../interfaces/product.interface';
import { log } from 'console';

@Component({
  selector: 'app-bed',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, BedSheetsComponent],
  templateUrl: './bed.component.html',
  styleUrl: './bed.component.scss',
})
export class BedComponent implements OnInit{
  @ViewChild('childContainer', { read: ViewContainerRef })
  childContainer: ViewContainerRef;
  tempContainer: Category[];
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private mainCategory: CategoryService
  ) {}


  ngOnInit() {
    this.addChildComponent();
  }

  addChildComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(BedSheetsComponent);
    const componentRef = this.childContainer.createComponent(componentFactory);
    componentRef.instance.ParentCategory = this.tempContainer; // Передача данных в дочерний компонент
  }

  getCategoryByMainCategory(id: number){
    this.mainCategory.getCategoryByMainCategory(id.toString()).subscribe(
      (data) => {
        console.log(data.length + 1);
        this.tempContainer = data
      }
    )
  }

  getMainCategory(id: number) {
    this.mainCategory.getMainCategories(id.toString()).subscribe((data) => {

    });
  }
}
