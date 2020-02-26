import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  confirm(){
    return confirm("Are u Sure u want to Navigate from this contact page")
    }
  ngOnInit() {
  }

}
