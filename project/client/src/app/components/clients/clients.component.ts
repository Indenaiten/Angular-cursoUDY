//imports
import { Component, OnInit } from '@angular/core';

//CLASSES
import { Client } from './classes/client';

//CLIENTS COMPONENT
@Component({
  selector: 'app-clients', //NAME OF SELECTOR OF COMPONENT
  templateUrl: './clients.component.html', //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ './clients.component.css' ] //NAMES OF STYLES OF COMPONENT
})
export class ClientsComponent implements OnInit{
  //ATTRIBUTES
  public clients:Client[] = [
    { id : 1, name : "Ángel", lastname1 : "Herce", lastname2 : "Soto", birthdate : "10/02/1993", email : "ahs@gmail.com", createdAt : "01/01/2018" },
    { id : 2, name : "Lucia", lastname1 : "García", lastname2 : "Fernandez", birthdate : "25/01/1992", email : "lgf@gmail.com", createdAt : "12/03/2018" },
    { id : 3, name : "Sara", lastname1 : "Fernandez", lastname2 : "Cabeza", birthdate : "15/10/1994", email : "sfc@gmail.com", createdAt : "03/03/2018" },
    { id : 4, name : "Maria", lastname1 : "Martinez", lastname2 : "Garrido", birthdate : "22/12/1993", email : "mmg@gmail.com", createdAt : "17/12/2018" },
    { id : 5, name : "Raul", lastname1 : "Estevez", lastname2 : "Dieguez", birthdate : "18/03/1993", email : "red@gmail.com", createdAt : "11/10/2018" },
    { id : 6, name : "Laura", lastname1 : "Rodriguez", lastname2 : "Perez", birthdate : "11/04/1995", email : "lrp@gmail.com", createdAt : "03/03/2018" },
    { id : 7, name : "Fernando", lastname1 : "Menendez", lastname2 : "Suarez", birthdate : "04/01/1992", email : "fms@gmail.com", createdAt : "10/02/2018" },
    { id : 8, name : "Julia", lastname1 : "Morrejon", lastname2 : "Fernandez", birthdate : "01/09/1994", email : "jmf@gmail.com", createdAt : "05/06/2017" },
    { id : 9, name : "Ruben", lastname1 : "Cabezas", lastname2 : "Martinez", birthdate : "27/03/1994", email : "rcm@gmail.com", createdAt : "21/09/2017" },
    { id : 10, name : "Nuria", lastname1 : "Perez", lastname2 : "Dominguez", birthdate : "26/07/1996", email : "npd@gmail.com", createdAt : "29/11/2017" },
  ];

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF CLIENTS COMPONENT
