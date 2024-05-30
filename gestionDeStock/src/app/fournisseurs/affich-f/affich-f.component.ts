import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FournisseurServiceService } from 'app/service/fournisseur-service.service';

@Component({
  selector: 'app-affich-f',
  templateUrl: './affich-f.component.html',
  styleUrls: ['./affich-f.component.css']
})
export class AffichFComponent implements OnInit {

  id;
  FournisseurForm
  
   constructor(
      public dialogRef :MatDialogRef<AffichFComponent >,
      private FournisseurServices: FournisseurServiceService,
     @Inject(MAT_DIALOG_DATA)public data: any ){ };
  
   ngOnInit(): void  {
    this.FournisseurForm = new FormGroup({
      nameFournisseur : new FormControl('', [Validators.required]),
      telpFournisseur: new FormControl('', [Validators.required]),
      faxFournisseur : new FormControl('', [Validators.required]),
      adresseFournisseur : new FormControl('', [Validators.required]),
      emailFournisseur : new FormControl('', [Validators.required,Validators.email]),
      modepaimentFournisseur: new FormControl('', [Validators.required]), 
      villeFournisseur : new FormControl('', [Validators.required]),
      typeFournisseur : new FormControl('', [Validators.required]),
      favorisFournisseur: new FormControl(),
      refFournisseur: new FormControl('', [Validators.required]),
      


      
    });

     this.FournisseurServices.getFournisseurbyid(this.data.id).subscribe((response:any) => {
       this.FournisseurForm.patchValue(response);        
    });
   }
   close(): void {
     this.dialogRef.close();
   }   

}
