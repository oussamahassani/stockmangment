import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ProduitServiceService } from 'app/service/produit-service.service';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface pack{ 
  refPack : String,
  namePack : String,
  produits:Array<any>,
 
  }

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
  PackForm;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ProduitCtrl = new FormControl();
  filteredProduits: Observable<string[]>;
  TabProduit: string[] = [];
  allProduits: Array<any>;;
  submited = false;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild(MatAccordion) accordion: MatAccordion;
;
  
  public displayedColumns = ['refPack', 'namePack','produits', 'update', 'delete'];
  public dataSource = new MatTableDataSource<pack>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog ,private produitServices: ProduitServiceService) { }
  ngOnInit(): void {
    this.PackForm = new FormGroup({
      refPack :new FormControl('', [Validators.required]),
      namePack : new FormControl('', [Validators.required]),
     
        });
    this.produitServices.getProduit().subscribe((response:any) => {
      this.allProduits = response.produit;
      this.filteredProduits = this.ProduitCtrl.valueChanges.pipe(
        startWith(null),
        map((prod: string | null) => prod ?        
        this.allProduits.filter(produit => produit.nameProduit.toLowerCase().indexOf(prod) === 0) : this.allProduits));      
   })
   this.produitServices.getPack().subscribe((response:any) => {     
    this.dataSource.data = response.pack as pack[];
    console.log( response.pack);  
 })
  }

  save(){
   this.PackForm.addControl('produits', new FormControl(this.TabProduit))
   this.submited = true;
   if (this.PackForm.invalid) {
     return;
   }
      this.produitServices.addPack(this.PackForm.value).subscribe(
        (msg) => {
          console.log(msg)
        },
        (error) => {console.log(error)},
        ()=>{this.ngOnInit()}
      
      ); 
      this.accordion.closeAll()
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our produit
    this.produitServices.getProduit().subscribe((response:any) => {
    
      if ((value === response.produit.filter(produit => produit.nameProduit))) {
     
        this.TabProduit.push();     
      }
     });
    
 
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.ProduitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.TabProduit.indexOf(fruit);

    if (index >= 0) {
      this.TabProduit.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.TabProduit.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.ProduitCtrl.setValue(null);
  }
  
}
