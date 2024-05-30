
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClientServiceService } from 'app/service/client-service.service';


@Component({
  selector: 'app-affich-client',
  templateUrl: './affich-client.component.html',
  styleUrls: ['./affich-client.component.css']
})

export class AffichClientComponent implements OnInit {
 id;
 clientForm;
 
  constructor(
     public dialogRef :MatDialogRef<AffichClientComponent >,
     private ClientServices: ClientServiceService,
    @Inject(MAT_DIALOG_DATA)public data: any ){ };
 
  ngOnInit(): void  {
    this.clientForm = new FormGroup({
      nameClient : new FormControl(),
      telpClient: new FormControl(),
      faxClient : new FormControl(),
      adresseClient : new FormControl(),
      emailClient : new FormControl(),
      modepaimentClient: new FormControl(), 
      villeClient : new FormControl(),
      typeClient : new FormControl(),
      favorisClient: new FormControl(),
      refClient: new FormControl(),
         
    });
    this.ClientServices.getClientbyid(this.data.id).subscribe((response:any) => {
      this.clientForm.patchValue(response); 
      console.log(response);
             
   });
  }
  close(): void {
    this.dialogRef.close();
  }   
}


