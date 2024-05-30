import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from 'app/service/client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  
  submited = false;
  clientForm: FormGroup;
  
  constructor(private ClientServices: ClientServiceService, private route: Router) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      nameClient : new FormControl('', [Validators.required]),
      telpClient: new FormControl('', [Validators.required]),
      faxClient : new FormControl('', [Validators.required]),
      adresseClient : new FormControl('', [Validators.required]),
      emailClient : new FormControl('', [Validators.required,Validators.email]),
      modepaimentClient: new FormControl('', [Validators.required]), 
      villeClient : new FormControl('', [Validators.required]),
      typeClient : new FormControl('', [Validators.required]),
      favorisClient: new FormControl(false),
      refClient: new FormControl('', [Validators.required]),
      


      
    });
  }

  submitClient() {
    this.submited = true;
    if (this.clientForm.invalid) {
      return;
    }
   
    
     this.ClientServices.addClient(this.clientForm.value).subscribe(
      (msg) => {
        console.log(msg),
        location.reload()
      },
      (error) => {console.log(error)},
      ()=>{this.ngOnInit()}
    );
    
  }

}
