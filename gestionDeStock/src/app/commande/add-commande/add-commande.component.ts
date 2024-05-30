import { ChangeDetectorRef, Component, OnInit, Pipe } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientServiceService } from 'app/service/client-service.service';
import { CommandeSeviceService } from 'app/service/commande-sevice.service';
import { ProduitServiceService } from 'app/service/produit-service.service';

@Pipe({
  name: 'stringFilterBy'
})

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  produits: Array<any>;
  clients: Array<any>;
  commandeForm: FormGroup;
  commande;
  submited:boolean=false;
  total:number=0;
  constructor(private _fb: FormBuilder,private produitServices: ProduitServiceService ,
    private ref: ChangeDetectorRef,  private ClientServices: ClientServiceService,
    private CommandeServices: CommandeSeviceService) {
    this.createForm();
  }

  ngOnInit(){
    this.commandeForm = this._fb.group({
      commandeItems: this._fb.array([this.initItemRows()]) ,
      refCommande : new FormControl('', [Validators.required]),
      idClient: new FormControl('', [Validators.required]),
      montant_total:new FormControl(),
      date_commande:new FormControl(Date.now()),
      valide:new FormControl(false)
    });
    this.produitServices.getProduit().subscribe((response:any) => {
      this.produits= response ;
   })  

   this.ClientServices.getClient().subscribe((response: any) => {
    this.clients = response;
  })
   this.ref.detectChanges();
 
  
  }
  save(){
  
    this.submited=true;
    if (this.commandeForm.invalid) {
      return;
    }
    
    console.log(this.commandeForm.value);
     this.CommandeServices.addCommande(this.commandeForm.value);
  }
  

 
  createForm(){
    this.commandeForm = this._fb.group({
      commandeItems: this._fb.array([])
    });
    this.commandeForm.setControl('commandeItems', this._fb.array([]));
  
    
  }

  get commandeItems(): FormArray {
    return this.commandeForm.get('commandeItems') as FormArray;
  }

  addNewRow(){
   const control = <FormArray>this.commandeForm.controls['commandeItems'];

   control.push(this.initItemRows());
  }
  deleteRow(index: number) {
    const control = <FormArray>this.commandeForm.controls['commandeItems'];
    control.removeAt(index);
}

  onSelectionChange(e,i) {
    const prix=this.produits.find(element => element.id=== e.source.value);
    this.commandeItems.at(i).patchValue({prixVente:prix.prixVente});
    this.commandeItems.at(i).patchValue({quantity:0});
    this.commandeItems.at(i).patchValue({nameProduit:prix.nameProduit});

  }

  saverange(e,i){
   const prix= this.commandeForm.value.commandeItems[i].prixVente
    this.commandeItems.at(i).patchValue({montant:e*prix});
   let k= this.commandeItems.at(i).value.montant;
   this.total+=k;
   
  }

  initItemRows() {
    return this._fb.group({
        //list all your form controls here, which belongs to your form array
        nameProduit: ['', [Validators.required]],
        idP:['', [Validators.required]],
        quantity:['', [Validators.required]],
        prixVente:['', [Validators.required]],
        montant:['', [Validators.required]]

    });
}
transform(arr: any[], searchText: string,fieldName?:string): any[] {
  if (!arr) return [];
  if (!searchText) return arr;
  searchText = searchText.toLowerCase();
  return arr.filter((it:any) => {
    if(typeof it == 'string'){
      return it.toLowerCase().includes(searchText);
    }else if(typeof it == 'number'){
      return it.toString().toLowerCase().includes(searchText);
    }else{
      return it[fieldName].toLowerCase().includes(searchText);
    }
    
  });
}


}
