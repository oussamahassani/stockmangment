import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FournisseurServiceService } from 'app/service/fournisseur-service.service';

export interface fav{
  nameClient : String,
  adresseClient :String,
  emailClient : String,
  telpClient:String
}

@Component({
  selector: 'app-fav-f',
  templateUrl: './fav-f.component.html',
  styleUrls: ['./fav-f.component.css']
})
export class FavFComponent implements OnInit {

  public displayedColumns = ['ref_f','name', 'telephone','email', 'address'];
  public dataSource = new MatTableDataSource<fav>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, public dialog: MatDialog,private FournisseurServices: FournisseurServiceService ) { }

  ngOnInit(): void {
    this.getAllOwners();
  }
  getAllOwners () {
    this.FournisseurServices.getFavFournisseur().subscribe((response:any) => {
      this.dataSource.data = response as fav[];
   })
}
favoris(id){
  this.FournisseurServices.favoris(id).subscribe(
    (msg) => {
      console.log(msg)
   
    },
    (error) => {console.log(error)},
    ()=>{this.ngOnInit()}
  );

}
}
