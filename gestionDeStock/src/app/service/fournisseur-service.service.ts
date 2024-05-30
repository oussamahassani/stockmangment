import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {
  baseUrl="/api";

  constructor(private  httpClient: HttpClient) { }

  addFournisseur(Fournisseur){
    this.httpClient.post<any>(this.baseUrl+'fournisseurs/addFournisseur',Fournisseur).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getFournisseur(){
    const user= this.httpClient.get(this.baseUrl+'fournisseurs/allFournisseur');
    return user;
  }
  deleteFournisseur(id){
   return this.httpClient.delete(this.baseUrl+'fournisseurs/deletFournisseur/'+id);
  }
  getFournisseurbyid(id){
    const user= this.httpClient.get(this.baseUrl+'fournisseurs/getFournisseurById/'+id);
    return user;
  }
  updateFournisseur(id,Fournisseur){
    console.log(Fournisseur);
    
    this.httpClient.put(this.baseUrl+'fournisseurs/updateFournisseur/'+id,Fournisseur).subscribe(
      (msg) => {
        console.log(msg)
      },
      (error) => console.log(error)
    );
  }
  favoris(id){
   return this.httpClient.put(this.baseUrl+'fournisseurs/updateFav/'+id,"");
  }
  getFavFournisseur(){
    const fournisseur= this.httpClient.get(this.baseUrl+'fournisseurs/getFavoritFournisseur');
    return fournisseur;
  }
}
