import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientServiceService } from 'app/service/client-service.service';
import { CommandeSeviceService } from 'app/service/commande-sevice.service';

@Component({
  selector: 'app-affich-commande',
  templateUrl: './affich-commande.component.html',
  styleUrls: ['./affich-commande.component.css']
})
export class AffichCommandeComponent implements OnInit {
clients;
date;
mont_tot;
refC;
produits: any = [];
  constructor(
    public dialogRef :MatDialogRef<AffichCommandeComponent >,
    private CommandeServices: CommandeSeviceService,
  
   @Inject(MAT_DIALOG_DATA)public data: any ){ };

  ngOnInit(): void {
    this.CommandeServices.getCommandebyid(this.data.id).subscribe((response:any) => {
      console.log(response.client);
      this.clients=response.client;
     
      response.commandeItems.forEach(element => {
console.log(element);

        this.produits.push(element)
      });
      
this.date=response.date_commande;
this.mont_tot=response.montant_total;
this.refC=response.refCommande;


  })
  }
  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();
    document.body.innerHTML = originalContents;
}
close() {
  this.dialogRef.close();
  
}   

}
