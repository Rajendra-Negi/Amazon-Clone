import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { HeaderComponent } from 'src/app/components/header/header.component';
// import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { CarouselComponent } from 'src/app/components/products/carousel/carousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    // HeaderComponent,
    // FooterComponent,
    ProductsComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
