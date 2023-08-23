
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsapiservicesService } from '../newsapiservices.service';
import axios from 'axios';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselItems:any

  constructor() { }



  //Bu kod parçası, bileşenin oluşturulduğunda belirtilen URL'ye bir API isteği gönderir, API'den dönen verileri işler ve bu verileri kullanarak karusel öğesi için içerik oluşturur. 
  //axios kütüphanesi, HTTP istekleri yapmak ve almak için kullanılır ve bu kodun temel amacı haber başlıklarını popülerlik sırasına göre çekmektir.
  ngOnInit() {
    axios('https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=ea33ea75299145b6bce22e598b83bdea')
    .then((res: { data: { articles: string | any[]; }; })=>{
        this.carouselItems = res.data.articles.slice(-4,-1)

    }).catch((err: any)=>console.log(`error`,err)).finally(()=>{
      console.log(this.carouselItems);  
      
    })
    
  }











}




