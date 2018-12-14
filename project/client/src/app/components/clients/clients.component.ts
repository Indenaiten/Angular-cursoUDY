//imports
import { Component, OnInit } from '@angular/core';

//CLASSES
import { Client } from './classes/client';

//JSON
import { CLIENTS } from './json/clients.json';

//CLIENTS COMPONENT
@Component({
  selector: 'app-clients', //NAME OF SELECTOR OF COMPONENT
  templateUrl: './clients.component.html', //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ './clients.component.css' ] //NAMES OF STYLES OF COMPONENT
})
export class ClientsComponent implements OnInit{
  //ATTRIBUTES
  public clients:Client[];

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){
    //SET CLIENTS
    this.clients = CLIENTS;
  }
}//END OF CLIENTS COMPONENT
