import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

export @Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
 class GeneralComponent implements OnInit {


  constructor(private _services: NewsapiservicesService) {}
  generalDisplay:any = [];

  ngOnInit(): void {
    this._services.general().subscribe((result) => {
      this.generalDisplay = result.articles; 
    });
    
  }
}