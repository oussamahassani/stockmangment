import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurServiceService } from 'app/service/fournisseur-service.service';
import { ProduitServiceService } from 'app/service/produit-service.service';




@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  submited = true;
  ProduitForm: FormGroup;
  fournis: Array<any>;
  cats: Array<any>;

  constructor(private ProduitServices: ProduitServiceService, private route: Router, private FournisseurServices: FournisseurServiceService) { }

  ngOnInit(): void {
    this.ProduitForm = new FormGroup({
      refProduit: new FormControl('', [Validators.required]),
      nameProduit: new FormControl('', [Validators.required]),
      qteProduit: new FormControl('', [Validators.required]),
      prixDachat: new FormControl('', [Validators.required]),
      prixVente: new FormControl('', [Validators.required]),
      idFournisseur: new FormControl('', [Validators.required]),
      idCat: new FormControl(),
      idPack: new FormControl(),
    });
    this.FournisseurServices.getFournisseur().subscribe((response: any) => {
      this.fournis = response;
    })
    this.ProduitServices.getCategorie().subscribe((response: any) => {
      this.cats = response;
    })
  }

  submitProduit() {
    this.submited = true;
    if (this.ProduitForm.invalid) {
      return;
    }
    this.ProduitServices.addProduit(this.ProduitForm.value);
  }

}
