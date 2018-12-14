//IMPORTS
import { Component, OnInit } from '@angular/core';

//HEADER COMPONENT
@Component({
  selector: 'app-header', //NAME OF SELECTOR OF COMPONENT
  templateUrl: './header.component.html', //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ './header.component.css' ] //NAMES OF STYLESSHEETS OF COMPONENT
})
export class HeaderComponent implements OnInit{
  //ATTRIBUTES
  public title: string = "App Clientes";

  //METHODS
  //CONSTRUCTOR
  constructor(){

  }

  //INIT
  ngOnInit(){

  }
}//END OF HEADER COMPONENT
