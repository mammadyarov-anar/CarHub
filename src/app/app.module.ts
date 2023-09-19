import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { CarCatalogueComponent } from './car-catalogue/car-catalogue.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { SearchDropdownComponent } from './search-dropdown/search-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    CarCatalogueComponent,
    CustomDropdownComponent,
    CarCardsComponent,
    CardComponent,
    FooterComponent,
    SearchDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
