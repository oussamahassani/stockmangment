import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServiceService } from 'app/service/client-service.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  submited = true;
  clientForm: FormGroup;
 

  constructor(  private route: Router, public dialogRef :MatDialogRef<UpdateClientComponent >,
    private ClientServices: ClientServiceService,
   @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      _id: new FormControl(),
      nameClient : new FormControl('', [Validators.required]),
      telpClient: new FormControl('', [Validators.required]),
      faxClient : new FormControl('', [Validators.required]),
      adresseClient : new FormControl('', [Validators.required]),
      emailClient : new FormControl('', [Validators.required,Validators.email]),
      modepaimentClient: new FormControl('', [Validators.required]), 
      villeClient : new FormControl('', [Validators.required]),
      typeClient : new FormControl('', [Validators.required]),
      favorisClient: new FormControl(),
      refClient: new FormControl('', [Validators.required]),
     
  
    });
    
   this.ClientServices.getClientbyid( this.data.id).subscribe((response:any) => {
      this.clientForm.patchValue(response);        
   });
  }
  submitupdate() {
   
    this.submited = true;
    if (this.clientForm.invalid) {
      return;
    }else
    {
      this.ClientServices.updateClient( this.data.id,this.clientForm.value);
    
      
     this.route.navigateByUrl("/client"); 
    }
  }

}
