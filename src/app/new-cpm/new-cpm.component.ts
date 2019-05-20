import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cpm',
  templateUrl: './new-cpm.component.html',
  styleUrls: ['./new-cpm.component.css']
})
export class NewCpmComponent implements OnInit {

  message = "halo ghes!";
  arrayOfMonth = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isAvail = true;

  constructor() { }

  ngOnInit() {
  }

}
