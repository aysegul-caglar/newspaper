import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from '@coreui/angular';

import { AlertModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './aboutme/aboutme.component';

import { TopheadingComponent } from './topheading/topheading.component';
import { NewsapiservicesService } from './newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportComponent } from './sport/sport.component';
import { ScienceComponent } from './science/science.component';
import { healthComponent } from './health/health.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SportComponent,
    ScienceComponent,
    healthComponent,
    GeneralComponent,
    EntertainmentComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    AlertModule,
    BrowserAnimationsModule,
    CommonModule,
   

  ],
  providers: [NewsapiservicesService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  bootstrap: [AppComponent],
 
})
export class AppModule { }


