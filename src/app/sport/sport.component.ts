import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})


export class SportComponent implements OnInit {


  constructor(private _services: NewsapiservicesService) {}
  sportDisplay:any = [];

  ngOnInit(): void {
    this._services.sport().subscribe((result) => {
      this.sportDisplay = result.articles; 
    });
    
  }
}