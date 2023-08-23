import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportComponent } from './sport/sport.component';
import { ScienceComponent } from './science/science.component';
import { healthComponent } from './health/health.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


const routes: Routes = [
{path:'topheading',component:TopheadingComponent},
{path:'category',component:CategoryComponent},
{path:'product',component:ProductComponent},
{path:'aboutme',component:AboutMeComponent},
{path:'tech',component:TechnewsComponent},
{path:'business',component:BusinessnewsComponent},
{path:'science',component:ScienceComponent},
{path:'sport',component:SportComponent},
{path:'general',component:GeneralComponent},
{path:'entertainment',component:EntertainmentComponent},
{path:'health',component:healthComponent},
{path:'',redirectTo:'home',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
