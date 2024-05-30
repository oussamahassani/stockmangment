import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProduitServiceService } from 'app/service/produit-service.service';
import { AddProduitComponent } from '../add-produit/add-produit.component';
import { AffichProduitComponent } from '../affich-produit/affich-produit.component';
import { UpdateProduitComponent } from '../update-produit/update-produit.component';

export interface Owner{ 
refProduit : String, 
nameProduit : String,
qteProduit : String,
prixDachat : String,
prixVente : String,

}

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {


  public displayedColumns = ['ref_produit','name_produit', 'quantite','prix_achat', 'prix_vente', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private router: Router, public dialog: MatDialog ,private produitServices: ProduitServiceService) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(AddProduitComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  openModal(id): void {
    const dialogRef = this.dialog.open(AffichProduitComponent, {
      data :{'id':id}
 });
    dialogRef.afterClosed().subscribe((result:string) => {
        this.router.navigate(['AffichClientComponent',id]);

        console.log('The dialog was closed');
        console.log(result);
    });
}

openModalUpdate(id): void {
  const dialogRef = this.dialog.open(UpdateProduitComponent, {
    data :{'id':id}
});
  dialogRef.afterClosed().subscribe((result:string) => {
      this.router.navigate(['UpdateProduitComponent',id]);

      console.log('The dialog was closed');
      console.log(result);
  });
}
  ngOnInit(): void {
    this.getAllOwners();
  
  }

   getAllOwners () {
    this.produitServices.getProduit().subscribe((response:any) => {
       this.dataSource.data = response as Owner[];
    })
    
  }

 
 redirectToDelete  (id) {
  this.produitServices.deleteProduit(id).subscribe(
    (msg) => {
      console.log(msg)
    },
    (error) => {console.log(error)},
    ()=>{this.ngOnInit()}
  ); 
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}