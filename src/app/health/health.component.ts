import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})

export class healthComponent implements OnInit {


  constructor(private _services: NewsapiservicesService) {}
 healthDisplay:any = [];

  ngOnInit(): void {
    this._services.health().subscribe((result) => {
      this.healthDisplay = result.articles; 
    });
    
  }
}