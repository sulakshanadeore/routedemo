import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

  customerlist:Cust[]=[
{id:1,name:"Anita",city:"Pune"},
{id:2,name:"Sunita",city:"Pune"},
{id:3,name:"Ankita",city:"Pune"},
{id:4,name:"Arpita",city:"Pune"},
{id:5,name:"Gargi",city:"Pune"}

  ];
  
}
