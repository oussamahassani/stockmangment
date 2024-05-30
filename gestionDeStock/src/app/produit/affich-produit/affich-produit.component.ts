import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AffichClientComponent } from 'app/client/affich-client/affich-client.component';
import { ProduitServiceService } from 'app/service/produit-service.service';

@Component({
  selector: 'app-affich-produit',
  templateUrl: './affich-produit.component.html',
  styleUrls: ['./affich-produit.component.css']
})
export class AffichProduitComponent implements OnInit {
  ProduitForm;
  id;

  constructor(
    public dialogRef :MatDialogRef<AffichClientComponent >,
    private produitServices: ProduitServiceService,
   @Inject(MAT_DIALOG_DATA)public data: any ){ };

  ngOnInit(): void {
    this.ProduitForm = new FormGroup({
      nameProduit :new FormControl(),
      qteProduit : new FormControl(),
      prixDachat : new FormControl(),
      prixVente :new FormControl(),
      idFournisseur:new FormControl(),
      idCat:new FormControl(),
      idPack:new FormControl(),
    });

    this.produitServices.getProduitbyid(this.data.id).subscribe((response:any) => {
    this.ProduitForm.patchValue(response);
     
   })
  }

  close(): void {
    this.dialogRef.close();
  }   
}
