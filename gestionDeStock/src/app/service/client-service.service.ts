import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  baseUrl="/api";

  constructor(private  httpClient: HttpClient) { }

  addClient(cl){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
  return  this.httpClient.post<any>(this.baseUrl+'clients/addClient',cl,{ headers: headers })
  }
  getClient(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const user= this.httpClient.get(this.baseUrl+'clients/allClients',{ headers: headers });
    return user;
  }
  deleteClient(id){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
  return  this.httpClient.delete(this.baseUrl+'clients/deletClient/'+id,{ headers: headers })
  }
  getClientbyid(id){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const user= this.httpClient.get(this.baseUrl+'clients/getClientById/'+id,{ headers: headers });
    return user;
  }
  updateClient(id,client){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
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
