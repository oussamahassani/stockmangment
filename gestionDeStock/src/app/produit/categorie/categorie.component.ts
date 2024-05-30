import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProduitServiceService } from 'app/service/produit-service.service';

export interface Owner{ 
  refCat : String,
  nameCat : String,
  }


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  CategorieForm;
  submited = false;
  showAddButton:boolean=true;
  index:any;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  public displayedColumns = ['refCat', 'nameCat', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog ,private produitServices: ProduitServiceService) { }

 


  ngOnInit(): void {
    this.CategorieForm = new FormGroup({
      refCat :new FormControl('', [Validators.required]),
      nameCat : new FormControl('', [Validators.required]),
    });


    this.produitServices.getCategorie().subscribe((response:any) => {     
      this.dataSource.data = response as Owner[];
   })
  }

  submitCategorie() {
    this.submited = true;
    if (this.CategorieForm.invalid) {
      return;
    }
       this.produitServices.addCategorie(this.CategorieForm.value).subscribe(
        (msg) => {
          console.log(msg)
        },
        (error) => {console.log(error)},
        ()=>{this.ngOnInit()}
      ); 
       this.accordion.closeAll()
  }
  update(i)
  {
    this.index=i;
    this.showAddButton=false;
    this.accordion.openAll();
    this.produitServices.getCatbyid(i).subscribe((response:any) => {
    this.CategorieForm.patchValue(response);        
   });

  }
  saveUpdate(){

    this.showAddButton=true;
    if (this.CategorieForm.invalid) {
      return;
    }else
    {
      this.produitServices.updateCategorie(this.index,this.CategorieForm.value).subscribe(
        (msg) => {
          console.log(msg)
        },
        (error) => {console.log(error)},
        ()=>{this.ngOnInit()}
      ); 
      this.accordion.closeAll()
    }
  }
  redirectToDelete  (id) {
    this.produitServices.deleteCat(id).subscribe(
      (msg) => {
        console.log(msg)
      },
      (error) => {console.log(error)},
      ()=>{this.ngOnInit()}
    ); 
    }
}
