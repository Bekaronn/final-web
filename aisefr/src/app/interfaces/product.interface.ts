export interface Product {
  id: string;
  title: string;
  description: string;
  photo: string;
  gallery: string[];
  rating: string;
  price: number;
  category: string;
  likes: number;
}


        // "id": 4,
        // "name": "asdasd",
        // "description": "asdadsa",
        // "price": 1212,
        // "likes": true,
        // "image": "asdasd",
        // "category": 8
export interface RealProduct{
  id: number
  name: string
  description: string
  price: number
  likes: boolean
  image: string
  category: number
}


export interface Category{
  id: number;
  name: number;
}


export const products: Product[] = [
      {
        "id": "1",
        "title": "Постельный комплект Сатин 2-х спальный",
        "description": "Наши популярные постельные комплекты теперь доступны в сатиновом исполнении! Сатин — это исключительная ткань высшего качества, изготовленная из 100% хлопка, которая характеризуется невероятной гладкостью, плотностью и приятным на ощупь материалом. Особенностью сатина является его приятный «шелковый» блеск. У нас есть несколько привлекательных цветовых вариантов постельного белья на выбор. Мы надеемся, что вы найдете тот, который будет вам по вкусу!",
        "photo": "https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2571-scaled.jpg",
        "gallery": ["https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2571-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2151-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2573-scaled.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 52000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "2",
        "title": "Постельный комплект Ранфорс 2-х спальный",
        "description": "Постельный комплект из ранфорса выполнен в сдержанном, современном стиле и дополнен жаккардовыми полосками.Ранфорс представляет собой натуральную ткань, созданную на основе 100% хлопка. Её характеризуют превосходная прочность и эффективная терморегуляция: зимой она сохраняет тепло, а летом обеспечивает прохладу. Следуя рекомендациям по уходу, вы сможете сохранить внешний вид ранфорса на долгие годы, даже после многократных стирок. К тому же, благодаря его мягкости, на таком постельном белье спать особенно комфортно.",
        "photo": "https://www.zugohome.com/kz/wp-content/uploads/2023/10/arakis-v4-nev-scaled-e1699962649678.jpg",
        "gallery": ["", "https://www.zugohome.com/kz/wp-content/uploads/2023/10/arakis-v1-nev-scaled-e1700027790879.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2023/10/arakis-v3-nev-scaled-e1699961780238.jpg"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 49000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "3",
        "title": "Постельный комплект Спрайт Сатин 2-х спальный",
        "description": "Мы рады предложить вам отличное сатиновое постельное белье для двуспальной кровати по наилучшей цене в Казахстане. В постельный комплект входят: Простынь: 240 * 260, Пододеяльник: 200 * 220, Наволочки: 50 * 70 (2 шт.)",
        "photo": "https://www.zugohome.com/kz/wp-content/uploads/2024/01/img_2153-scaled.jpg",
        "gallery": ["https://www.zugohome.com/kz/wp-content/uploads/2024/01/img_2153-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2024/01/img_2152-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2024/01/1-beige--scaled.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 57000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "4",
        "title": "Постельный комплект Шелк 2-х спальный",
        "description": "Мы рады предложить вам отличное шелковое постельное белье для двуспальной кровати по наилучшей цене в Казахстане. В постельный комплект входят: Простынь: 240 * 260, Пододеяльник: 200 * 220, Наволочки: 50 * 70 (2 шт.)",
        "photo": "https://media.glamourmagazine.co.uk/photos/65b90f5e12774097b4f72ff0/1:1/w_1280%2Cc_limit/Silk%2520bedding%2520300124%2520SCREENSHOT%25202024-01-30%2520AT%252014.51.44%2520COPY.jpg",
        "gallery": ["https://media.glamourmagazine.co.uk/photos/65b90f5e12774097b4f72ff0/1:1/w_1280%2Cc_limit/Silk%2520bedding%2520300124%2520SCREENSHOT%25202024-01-30%2520AT%252014.51.44%2520COPY.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 50700,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "5",
        "title": "Постельный комплект Хлопок 2-х спальный",
        "description": "Мы рады предложить вам отличное хлопковое постельное белье для двуспальной кровати по наилучшей цене в Казахстане. В постельный комплект входят: Простынь: 240 * 260, Пододеяльник: 200 * 220, Наволочки: 50 * 70 (2 шт.)",
        "photo": "https://www.silkandsnow.com/wp-content/themes/silkandsnow/img/egyptian_driftwood_sham_3_20230706.jpg",
        "gallery": ["https://www.silkandsnow.com/wp-content/themes/silkandsnow/img/egyptian_driftwood_sham_3_20230706.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 39000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "6",
        "title": "Постельный комплект Сатин 1,5",
        "description": "Наши популярные постельные комплекты теперь доступны в сатиновом исполнении! Сатин — это исключительная ткань высшего качества, изготовленная из 100% хлопка, которая характеризуется невероятной гладкостью, плотностью и приятным на ощупь материалом. Особенностью сатина является его приятный «шелковый» блеск. У нас есть несколько привлекательных цветовых вариантов постельного белья на выбор. Мы надеемся, что вы найдете тот, который будет вам по вкусу!",
        "photo": "https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2571-scaled.jpg",
        "gallery": ["https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2571-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2151-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2023/12/img_2573-scaled.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 52000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "7",
        "title": "Постельный комплект Ранфорс 1,5",
        "description": "Постельный комплект из ранфорса выполнен в сдержанном, современном стиле и дополнен жаккардовыми полосками. Ранфорс представляет собой натуральную ткань, созданную на основе 100% хлопка. Её характеризуют превосходная прочность и эффективная терморегуляция: зимой она сохраняет тепло, а летом обеспечивает прохладу. Следуя рекомендациям по уходу, вы сможете сохранить внешний вид ранфорса на долгие годы, даже после многократных стирок. К тому же, благодаря его мягкости, на таком постельном белье спать особенно комфортно.",
        "photo": "https://www.zugohome.com/kz/wp-content/uploads/2023/10/arakis-v4-nev-scaled-e1699962649678.jpg",
        "gallery": ["", "https://www.zugohome.com/kz/wp-content/uploads/2023/10/arakis-v1-nev-scaled-e1700027790879.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2023/10/arakis-v3-nev-scaled-e1699961780238.jpg"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 49000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "8",
        "title": "Постельный комплект Спрайт Сатин 1,5",
        "description": "Мы рады предложить вам отличное сатиновое постельное белье для двуспальной кровати по наилучшей цене в Казахстане.",
        "photo": "https://www.zugohome.com/kz/wp-content/uploads/2024/01/img_2153-scaled.jpg",
        "gallery": ["https://www.zugohome.com/kz/wp-content/uploads/2024/01/img_2153-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2024/01/img_2152-scaled.jpg", "https://www.zugohome.com/kz/wp-content/uploads/2024/01/1-beige--scaled.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 57000,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "9",
        "title": "Постельный комплект Шелк 1,5",
        "description": "Мы рады предложить вам отличное шелковое постельное белье для двуспальной кровати по наилучшей цене в Казахстане.",
        "photo": "https://media.glamourmagazine.co.uk/photos/65b90f5e12774097b4f72ff0/1:1/w_1280%2Cc_limit/Silk%2520bedding%2520300124%2520SCREENSHOT%25202024-01-30%2520AT%252014.51.44%2520COPY.jpg",
        "gallery": ["https://media.glamourmagazine.co.uk/photos/65b90f5e12774097b4f72ff0/1:1/w_1280%2Cc_limit/Silk%2520bedding%2520300124%2520SCREENSHOT%25202024-01-30%2520AT%252014.51.44%2520COPY.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 50700,
        "category": "bed-sets",
        "likes": 0
      },
      {
        "id": "10",
        "title": "Постельный комплект Хлопок 1,5",
        "description": "Мы рады предложить вам отличное хлопковое постельное белье для двуспальной кровати по наилучшей цене в Казахстане.",
        "photo": "https://www.silkandsnow.com/wp-content/themes/silkandsnow/img/egyptian_driftwood_sham_3_20230706.jpg",
        "gallery": ["https://www.silkandsnow.com/wp-content/themes/silkandsnow/img/egyptian_driftwood_sham_3_20230706.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 39000,
        "category": "bed-sets",
        "likes": 0
      },

      {
        "id": "11",
        "title": "Наматрасник",
        "description": "Описание отсутствует.",
        "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fideia.ua%2Fru%2Fru-22521%2Fp22521&psig=AOvVaw2lHOrpZQR5OyBG9cfhMqHa&ust=1713962872703000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKClorSv2IUDFQAAAAAdAAAAABAJ",
        "gallery": ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fideia.ua%2Fru%2Fru-22521%2Fp22521&psig=AOvVaw2lHOrpZQR5OyBG9cfhMqHa&ust=1713962872703000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKClorSv2IUDFQAAAAAdAAAAABAJ"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 20500,
        "category": "bed-sheets",
        "likes": 0
      },
      {
        "id": "12",
        "title": "Подушка стандартный размер",
        "description": "Описание отсутствует.",
        "photo": "https://n1s2.hsmedia.ru/d7/bc/6d/d7bc6db0eb5b3a837abed17991fc7159/728x451_1_19e6a728530fe719f519d0cacc776483@1280x793_0xac120003_5476095241664988465.jpeg",
        "gallery": ["https://n1s2.hsmedia.ru/d7/bc/6d/d7bc6db0eb5b3a837abed17991fc7159/728x451_1_19e6a728530fe719f519d0cacc776483@1280x793_0xac120003_5476095241664988465.jpeg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 14200,
        "category": "bed-sheets",
        "likes": 0
      },
      {
        "id": "13",
        "title": "Подушка большой размер",
        "description": "Описание отсутствует.",
        "photo": "https://n1s2.hsmedia.ru/d7/bc/6d/d7bc6db0eb5b3a837abed17991fc7159/728x451_1_19e6a728530fe719f519d0cacc776483@1280x793_0xac120003_5476095241664988465.jpeg",
        "gallery": ["https://n1s2.hsmedia.ru/d7/bc/6d/d7bc6db0eb5b3a837abed17991fc7159/728x451_1_19e6a728530fe719f519d0cacc776483@1280x793_0xac120003_5476095241664988465.jpeg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 15400,
        "category": "bed-sheets",
        "likes": 0
      },
      {
        "id": "14",
        "title": "Одеяло 1,5",
        "description": "Описание отсутствует.",
        "photo": "https://www.togas.com/media/catalog/product/cache/a2206b70843206ee35ea397e8761bf32/h/e/helios_q_l_s_ru_2_d6fb.jpg",
        "gallery": ["https://www.togas.com/media/catalog/product/cache/a2206b70843206ee35ea397e8761bf32/h/e/helios_q_l_s_ru_2_d6fb.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 30700,
        "category": "bed-sheets",
        "likes": 0
      },
      {
        "id": "15",
        "title": "Одеяло 2-х спальное",
        "description": "Описание отсутствует.",
        "photo": "https://www.togas.com/media/catalog/product/cache/a2206b70843206ee35ea397e8761bf32/h/e/helios_q_l_s_ru_2_d6fb.jpg",
        "gallery": ["https://www.togas.com/media/catalog/product/cache/a2206b70843206ee35ea397e8761bf32/h/e/helios_q_l_s_ru_2_d6fb.jpg"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 45000,
        "category": "bed-sheets",
        "likes": 0
      },
      {
        "id": "16",
        "title": "Одеяло детское",
        "description": "Описание отсутствует.",
        "photo": "https://www.togas.com/media/catalog/product/cache/a2206b70843206ee35ea397e8761bf32/h/e/helios_q_l_s_ru_2_d6fb.jpg",
        "gallery": ["https://www.togas.com/media/catalog/product/cache/a2206b70843206ee35ea397e8761bf32/h/e/helios_q_l_s_ru_2_d6fb.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 25900,
        "category": "bed-sheets",
        "likes": 0
      },

      {
        "id": "17",
        "title": "Флисовая ЖЕНСКАЯ пижама",
        "description": "Рубашка из 100% хлопка. Воротник с лацканами, длинные рукава со складчатыми манжетами. Передний накладной карман. Деталь складки на спине. Застежка на пуговицы спереди скрыта клапаном.",
        "photo": "https://static.zara.net/assets/public/2bff/c8c7/e82b45c693f7/2bdd8230fba0/09057100712-015-p/09057100712-015-p.jpg?ts=1711280047565&w=854",
        "gallery": ["https://static.zara.net/assets/public/2bff/c8c7/e82b45c693f7/2bdd8230fba0/09057100712-015-p/09057100712-015-p.jpg?ts=1711280047565&w=854", "https://static.zara.net/assets/public/b847/7402/9a8540089914/b87f40ae069a/09057100712-e1/09057100712-e1.jpg?ts=1711120355278&w=854", "https://static.zara.net/assets/public/91e8/42af/8a14488192b7/2d1b019ef21d/09054101250-e1/09054101250-e1.jpg?ts=1711120348440&w=854"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 25900,
        "category": "pajamas",
        "likes": 0
      },
      {
        "id": "18",
        "title": "Хлопковая ЖЕНСКАЯ пижама",
        "description": "Белый/синий в полоску",
        "photo": "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F99%252F57%252F995779a3eefd243eabadb09a8816ab544b1ff7e6.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D",
        "gallery": ["https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F99%252F57%252F995779a3eefd243eabadb09a8816ab544b1ff7e6.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D", "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F78%252F6a%252F786acc0499fdd3924950e3da32d08f3f4cd81b34.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D", "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F2c%252Fe0%252F2ce029066535a92229b4e23f0d34b586fa9e7e6f.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255Bladies_nightwear_pyjamas%255D%252Ctype%255BDESCRIPTIVESTILLLIFE%255D%252Cres%255Bm%255D%252Chmver%255B2%255D&call=url%5Bfile:/product/main%5D"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 20500,
        "category": "pajamas",
        "likes": 0
      },
      {
        "id": "19",
        "title": "Шелковая ЖЕНСКАЯ пижама",
        "description": "Light grey/Spotted",
        "photo": "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F06%252F81%252F0681c9a4269eb56602f927e94bcf81861131d66f.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D",
        "gallery": ["https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F06%252F81%252F0681c9a4269eb56602f927e94bcf81861131d66f.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D", "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252Fea%252F22%252Fea229d5d4ce05210078e6495935572b7f7aa46ad.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D", "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252Fb5%252F1f%252Fb51f5065a7cc55873deade9448c5b97392052bcb.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255Bladies_night%255D%252Ctype%255BDESCRIPTIVESTILLLIFE%255D%252Cres%255Bm%255D%252Chmver%255B2%255D&call=url%5Bfile:/product/main%5D"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 25400,
        "category": "pajamas",
        "likes": 0
      },
      {
        "id": "20",
        "title": "Хлопковая МУЖСКАЯ пижама",
        "description": "Relaxed Fit Pajamas",
        "photo": "https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F6a%252Fa9%252F6aa9ebdc5e468bcebf5d27b426d2e8ada5210bd2.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D",
        "gallery": ["https://lp2.hm.com/hmgoepprod?set=quality%255B79%255D%252Csource%255B%252F6a%252Fa9%252F6aa9ebdc5e468bcebf5d27b426d2e8ada5210bd2.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D&call=url%5Bfile:/product/main%5D"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 20700,
        "category": "pajamas",
        "likes": 0
      },


      {
        "id": "21",
        "title": "Махровый ЖЕНСКИЙ халат",
        "description": "Вафельно-махровый халат",
        "photo": "https://static.insales-cdn.com/images/products/1/3473/385240465/full_2e052518-5180-11ea-a9d7-782bcb613abb.jpeg",
        "gallery": ["https://static.insales-cdn.com/images/products/1/3473/385240465/full_2e052518-5180-11ea-a9d7-782bcb613abb.jpeg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 20500,
        "category": "robes",
        "likes": 0
      },
      {
        "id": "22",
        "title": "Махровый МУЖСКОЙ халат",
        "description": "Вафельно-махровый халат",
        "photo": "https://static.cdek.shopping/images/shopping/0d30a35b7ebe4f41b30646ce295713d3.jpg",
        "gallery": ["https://static.cdek.shopping/images/shopping/0d30a35b7ebe4f41b30646ce295713d3.jpg"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 20500,
        "category": "robes",
        "likes": 0
      },
      {
        "id": "23",
        "title": "Флисовая ЖЕНСКИЙ халат",
        "description": "Черная флисовая",
        "photo": "https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1690797447/lmcode/fPdoUsd7UUiOJtCj3LWJDg/91311909.jpg",
        "gallery": ["https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1690797447/lmcode/fPdoUsd7UUiOJtCj3LWJDg/91311909.jpg"],
        "rating": "⭐️⭐️⭐️⭐️",
        "price": 14200,
        "category": "robes",
        "likes": 0
      },
      {
        "id": "24",
        "title": "Хлопковая ЖЕНСКИЙ халат",
        "description": "Waffle Organic Cotton Bath Robe",
        "photo": "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/tstpxgfmq/imageFileData/search?fileName=/Products%2FAMT0058M_000_001.jpg&fallback=/Products/AMT0058M_000_001.png&w=634&h=0&q=80&m=6&f=jpg&cropfocalregion=true",
        "gallery": ["https://images-ap-prod.cms.commerce.dynamics.com/cms/api/tstpxgfmq/imageFileData/search?fileName=/Products%2FAMT0058M_000_001.jpg&fallback=/Products/AMT0058M_000_001.png&w=634&h=0&q=80&m=6&f=jpg&cropfocalregion=true"],
        "rating": "⭐️⭐️⭐️⭐️⭐️",
        "price": 25400,
        "category": "robes",
        "likes": 0
      }
]
