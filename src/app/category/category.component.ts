import { Component,OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';
import axios from 'axios';


export @Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

class CategoryComponent implements OnInit {


 constructor(private _services: NewsapiservicesService) {}
  categoryDisplay:any = []; //Bu dizi, API'den çekilen haberleri saklamak ve bileşenin HTML şablonunda göstermek için kullanılacak.

  ngOnInit(): void {  //Bu fonksiyon, Angular bileşeninin yaşam döngüsü sırasında ilk kez çalıştırılacak kodları içerir. Bileşen oluşturulduğunda ve görüntülemeye hazır olduğunda bu fonksiyon çalışır.
    this._services.category().subscribe((result) => {  //subscribe yöntemi, Observable'ın sonuçlarını bekler ve sonuçlar geldiğinde bir fonksiyonu tetikler.
      this.categoryDisplay = result.articles; //Bu satırda, API'den gelen haberler result.articles içinde saklanır. Bu haberler, categoryDisplay dizisine atanır. Bu sayede, haberleri bileşenin HTML şablonunda gösterebileceğiz.
    });
    
  }
  
}

