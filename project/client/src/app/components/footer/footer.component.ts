//IMPORTS
import { Component, OnInit } from '@angular/core';

//FOOTER COMPONENT
@Component({
  selector: 'app-footer', //NAME OF SELECTOR OF COMPONENT
  templateUrl: './footer.component.html', //NAME OF TEMPLATE OF COMPOENENT
  styleUrls: [ './footer.component.css' ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class FooterComponent implements OnInit{
  //ATTRIBUTES
  public author:string = "Ángel Herce Soto";

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF FOOTER COMPONENT
