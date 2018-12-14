//IMPORTS
import { Component, OnInit } from '@angular/core';

//NAV COMPONENT
@Component({
  selector: 'app-nav', //NAME OF SELECTOR OF COMPONENT
  templateUrl: './nav.component.html', //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ './nav.component.css' ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class NavComponent implements OnInit{
  //ATTRIBUTES
  public options: string[] = [ "Option 1", "Option 2", "Option 3", "Option 4", "Option 5" ];

  //METHODS
  //CONSTRUCTOR
  constructor(){

  }

  //INIT
  ngOnInit(){

  }
}//END OF NAV COMPONENT
