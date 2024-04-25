import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  bodyContentArray: any = [
    {
      title: "Поставщики",
      desc: `Наши поставщики из Турции и Италии являются вершиной мастерства и инновации в мире текстиля. Приглашаем вас насладиться роскошью и качеством, созданное с любовью и заботой о вашем комфорте.
      `,
      router: "size-chart"
    },
    {
      title: "Материалы",
      desc: `Наше постельное белье, пижамы, полотенца  и халаты созданы с использованием только лучших материалов, обеспечивая непревзойденный комфорт и качество.
      `,
      router: "size-chart"
    },
    {
      title: "Наша команда",
      desc: `Наша команда - это группа молодых и энергичных людей, каждый из которых обладает уникальными навыками и талантами. Мы верим в важность совместной работы и взаимодополняющихся способностей.
      `,
      router: "/about"
    },
    {
      title: "Размерная сетка",
      desc: `Мы предлагаем широкий ассортимент постельного белья, включая простыни, наволочки, и одеяла. Наша размерная сетка разработана с учетом различных потребностей клиентов и стандартов качества.
      `,
      router: "size-chart"
    },
  ]
}
