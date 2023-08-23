import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }  // bu kod parçası Angular framework'ü içinde bir bileşen veya servis sınıfının başlangıcını gösteriyor.
                                            // HttpClient servisi, web hizmetleriyle iletişim kurmak için kullanılır ve genellikle 
                                            //bu tür iletişim operasyonları Angular uygulamalarında servis sınıfları aracılığıyla gerçekleştirilir.

newsApiUrl=" https://newsapi.org/v2/top-headlines?country=in&apiKey=676f017549224f488970f1835f9db971";

techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=676f017549224f488970f1835f9db971";

businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=676f017549224f488970f1835f9db971";

sportApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=676f017549224f488970f1835f9db971";
healthApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=676f017549224f488970f1835f9db971";
scienceApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=676f017549224f488970f1835f9db971";
entertainmentApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=676f017549224f488970f1835f9db971";
generalApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=676f017549224f488970f1835f9db971";



//Bu fonksiyon bu haberlerin alındığı API'ye bir GET isteği gönderir ve bu isteğin sonucunu bir Observable nesnesi olarak döndürür. 
//Bu sayede, çağrıldığı yerde bu fonksiyonun sonucunu bekleyen 
//Angular bileşenleri veya servisleri, veriyi asenkron bir şekilde alabilir ve işleyebilir.
topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}

techNews():Observable<any>
{
  return this._http.get(this.techApiUrl);
}

businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl);
}
sport():Observable<any>
{
  return this._http.get(this.sportApiUrl);
}
science():Observable<any>
{
  return this._http.get(this.scienceApiUrl);
}
health():Observable<any>
{
  return this._http.get(this.healthApiUrl);
}
general():Observable<any>
{
  return this._http.get(this.generalApiUrl);
}
entertainment():Observable<any>
{
  return this._http.get(this.entertainmentApiUrl);
}

category():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}
}
