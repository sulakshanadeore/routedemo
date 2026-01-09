import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  standalone: false,
  templateUrl: './customerdetails.html',
  styleUrl: './customerdetails.css',
})
export class Customerdetails {
custid!:string|null;
custname!:string|null;
custcity!:string|null;

constructor(private route:ActivatedRoute){}

ngOnInit():void{
this.route.queryParamMap.subscribe(params=>{
this.custid=params.get('custid');
this.custname=params.get('custname');
this.custcity=params.get('custcity');

});

}

}
