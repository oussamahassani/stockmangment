import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  baseUrl = "/api";

  constructor(private httpClient: HttpClient) { }

  addProduit(cl) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    this.httpClient.post<any>(this.baseUrl + '/produits/addProduit', cl,{ headers: headers }).subscribe(
      (msg) => {
        console.log(msg),
          location.reload()
      },
      (error) => console.log(error)

    );
  }
  getProduit() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const produit = this.httpClient.get(this.baseUrl + '/produits/allProduits',{ headers: headers });
    return produit;
  }

  deleteProduit(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
   return this.httpClient.delete(this.baseUrl + '/produits/deletProduit/' + id,{ headers: headers })
  }
  getProduitbyid(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const user = this.httpClient.get(this.baseUrl + '/produits/getProduitById/'+ id,{ headers: headers });
    return user;
  }
  updateProduit(id, client) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    this.httpClient.put(this.baseUrl + '/produits/updateUser/' + id, client,{ headers: headers }).subscribe(
      (msg) => {
     
      },
      (error) => console.log(error)
    );
  }
  /******************************************** */
  addCategorie(cat) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
   return this.httpClient.post<any>(this.baseUrl + '/categorie/addCategorie', cat,{ headers: headers })
  }
  getCategorie() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const cat = this.httpClient.get(this.baseUrl + '/categorie/allCategories',{ headers: headers });
    return cat;
  }
  updateCategorie(id, cat) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
  return  this.httpClient.put(this.baseUrl + '/categorie/updateCategorie/' + id, cat , { headers: headers })
  }
  getCatbyid(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const cat = this.httpClient.get(this.baseUrl + '/categorie/getCategorieById/' + id , { headers: headers });
    return cat;
  }
  deleteCat(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.httpClient.delete(this.baseUrl + '/categorie/deletCategorie/' + id , { headers: headers })
  }
  /******************************************** */
  addPack(cat) {
    console.log(cat);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
  return  this.httpClient.post<any>(this.baseUrl + '/packs/addPack', cat , { headers: headers })

  }
  getPack() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const cat = this.httpClient.get(this.baseUrl + '/packs/allPacks',{ headers: headers });
    return cat;
  }
  updatePack(id, cat) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    this.httpClient.put(this.baseUrl + '/categorie/updateCategorie/' + id, cat,{ headers: headers }).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getPackbyid(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const cat = this.httpClient.get(this.baseUrl + '/categorie/getCatById/' + id,{ headers: headers });
    return cat;
  }
  deletePack(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    this.httpClient.delete(this.baseUrl + '/categorie/deletCat/' + id,{ headers: headers }).subscribe(
      (msg) => {
        console.log(msg),
          location.reload()
      },
      (error) => console.log(error)

    );
  }
}