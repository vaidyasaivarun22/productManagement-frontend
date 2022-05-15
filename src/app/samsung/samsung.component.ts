import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit{
  samsung:product[]=[];
  constructor(private dsObj:DataService){

  }
  ngOnInit(){
    this.dsObj.getSamsungData().subscribe
    (
      (data:product[])=>{
        this.samsung= data
      },
      (err: any)=>console.log('error is: ',err)
    )
  }
}