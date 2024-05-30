import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  baseUrl="/api";

  constructor(private  httpClient: HttpClient) { }

  addClient(cl){
  return  this.httpClient.post<any>(this.baseUrl+'clients/addClient',cl)
  }
  getClient(){
    const user= this.httpClient.get(this.baseUrl+'clients/allClients');
    return user;
  }
  deleteClient(id){
  return  this.httpClient.delete(this.baseUrl+'clients/deletClient/'+id)
  }
  getClientbyid(id){
    const user= this.httpClient.get(this.baseUrl+'clients/getClientById/'+id);
    return user;
  }
  updateClient(id,client){
    this.httpClient.put(this.baseUrl+'clients/updateClient/'+id,client).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  favoris(id){
  return  this.httpClient.put(this.baseUrl+'clients/updateFav/'+id,"")
  }
  getFavClient(){
    const client= this.httpClient.get(this.baseUrl+'clients/getFavoritClient');
    return client;
  }
}
