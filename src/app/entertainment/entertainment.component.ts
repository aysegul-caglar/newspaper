import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})

export class EntertainmentComponent implements OnInit {


  constructor(private _services: NewsapiservicesService) {}
  entertainmentDisplay:any = [];

  ngOnInit(): void {
    this._services.entertainment().subscribe((result) => {
      this.entertainmentDisplay = result.articles; 
    });
    
  }
}