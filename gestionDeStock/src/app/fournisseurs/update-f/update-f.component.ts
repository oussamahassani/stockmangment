import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateClientComponent } from 'app/client/update-client/update-client.component';
import { FournisseurServiceService } from 'app/service/fournisseur-service.service';

@Component({
  selector: 'app-update-f',
  templateUrl: './update-f.component.html',
  styleUrls: ['./update-f.component.css']
})
export class UpdateFComponent implements OnInit {
  submited = true;
  FournisseurForm: FormGroup;
  
 
  constructor(  private route: Router, public dialogRef :MatDialogRef<UpdateClientComponent >,
    private FournisseurServices: FournisseurServiceService,
   @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit(): void {
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
    this.FournisseurServices.getFournisseurbyid( this.data.id).subscribe((response:any) => {
      this.FournisseurForm.patchValue(response);        
   });
  }

  submitClient() {
    this.submited = true;
    if (this.FournisseurForm.invalid) {
      return;
    }
   
    
    this.FournisseurServices.updateFournisseur( this.data.id,this.FournisseurForm.value);
    this.dialogRef.close();
  }

}
