import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  confirm(){
  
    return alert("Are u Sure u want to Navigate from this register page")
    }
  ngOnInit() {
  }

}
