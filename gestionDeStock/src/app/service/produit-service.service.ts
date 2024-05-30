import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  baseUrl = "/api";

  constructor(private httpClient: HttpClient) { }

  addProduit(cl) {
    this.httpClient.post<any>(this.baseUrl + 'produits/addProduit', cl).subscribe(
      (msg) => {
        console.log(msg),
          location.reload()
      },
      (error) => console.log(error)

    );
  }
  getProduit() {
    const produit = this.httpClient.get(this.baseUrl + 'produits/allProduits');
    return produit;
  }

  deleteProduit(id) {
   return this.httpClient.delete(this.baseUrl + 'produits/deletProduit/' + id)
  }
  getProduitbyid(id) {
    const user = this.httpClient.get(this.baseUrl + 'produits/getProduitById/'+ id);
    return user;
  }
  updateProduit(id, client) {
    this.httpClient.put(this.baseUrl + 'produits/updateUser/' + id, client).subscribe(
      (msg) => {
     
      },
      (error) => console.log(error)
    );
  }
  /******************************************** */
  addCategorie(cat) {
   return this.httpClient.post<any>(this.baseUrl + 'categorie/addCategorie', cat)
  }
  getCategorie() {
    const cat = this.httpClient.get(this.baseUrl + 'categorie/allCategories');
    return cat;
  }
  updateCategorie(id, cat) {
  return  this.httpClient.put(this.baseUrl + 'categorie/updateCategorie/' + id, cat)
  }
  getCatbyid(id) {
    const cat = this.httpClient.get(this.baseUrl + 'categorie/getCategorieById/' + id);
    return cat;
  }
  deleteCat(id) {
    return this.httpClient.delete(this.baseUrl + 'categorie/deletCategorie/' + id)
  }
  /******************************************** */
  addPack(cat) {
    console.log(cat);
    
  return  this.httpClient.post<any>(this.baseUrl + 'packs/addPack', cat)

  }
  getPack() {
    const cat = this.httpClient.get(this.baseUrl + 'packs/allPack');
    return cat;
  }
  updatePack(id, cat) {
    this.httpClient.put(this.baseUrl + 'categorie/updateCategorie/' + id, cat).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => console.log(error)
    );
  }
  getPackbyid(id) {
    const cat = this.httpClient.get(this.baseUrl + 'categorie/getCatById/' + id);
    return cat;
  }
  deletePack(id) {
    this.httpClient.delete(this.baseUrl + 'categorie/deletCat/' + id).subscribe(
      (msg) => {
        console.log(msg),
          location.reload()
      },
      (error) => console.log(error)

    );
  }
}