import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurServiceService } from 'app/service/fournisseur-service.service';

@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent implements OnInit {

  submited = true;
  FournisseurForm: FormGroup;
  
  constructor( private route: Router,private FournisseurServices: FournisseurServiceService) { }

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
      favorisFournisseur: new FormControl(false),
      refFournisseur: new FormControl('', [Validators.required]),
      


      
    });
  }

  submitClient() {
    this.submited = true;
    if (this.FournisseurForm.invalid) {
      return;
    }
   
    
     this.FournisseurServices.addFournisseur(this.FournisseurForm.value);
    
  }
}
