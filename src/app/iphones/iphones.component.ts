import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { product } from '../models/product_id.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-iphones',
  templateUrl: './iphones.component.html',
  styleUrls: ['./iphones.component.css']
})
export class IphonesComponent implements OnInit{
  iphones:product[]=[];
  searchTerm!: string;
  p=1;
  constructor(private dsObj:DataService,private SpinnerService:NgxSpinnerService){

  }
  ngOnInit(){
    
    this.SpinnerService.show();
    this.dsObj.getIphonesData().subscribe
    (
      (data:product[])=>
      {
        this.SpinnerService.hide();
        this.iphones = data;
      },
      (err: any)=>{console.log('error is: ',err)}
    )
  }

}
