import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  confirm(){
    return confirm("Are u Sure u want to Navigate from this home page")
    }
  ngOnInit() {
  }

}
