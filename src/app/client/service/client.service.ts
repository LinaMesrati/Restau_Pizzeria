import { Injectable } from '@angular/core';
import { IClient } from '../model/iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients:IClient[]=[
    {
      id:1,
      nom:"Beha Kaaby",
      email:"kaabybeha@gmail.com",
      password:"123456",
      tel:"99909691"
    },
    {
      id:2,
      nom:"Lina Mosrati",
      email:"lina.mesrati@gmail.com",
      password:"987654",
      tel:"99636645"
    },
  ]
  constructor() { }
  getClients=()=>{
    return [...this.clients];
  }
  getClientById=(id:number)=>
  {
    return this.clients.find(client=>client.id===id)
  }
  //add


  //edit

  
  //delete
}
