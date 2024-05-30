import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  Router } from '@angular/router';
import { ClientServiceService } from 'app/service/client-service.service';
import { FournisseurServiceService } from 'app/service/fournisseur-service.service';
import { AddFComponent } from '../add-f/add-f.component';
import { AffichFComponent } from '../affich-f/affich-f.component';
import { FavFComponent } from '../fav-f/fav-f.component';
import { UpdateFComponent } from '../update-f/update-f.component';



export interface Owner{
  nameFournisseur : String,
  adresseFournisseur :String,
  emailFournisseur : String,
  telpFournisseur:String
}

@Component({
  selector: 'app-list-f',
  templateUrl: './list-f.component.html',
  styleUrls: ['./list-f.component.css']
})
export class ListFComponent implements OnInit {

  
public displayedColumns = ['ref_f','name', 'telephone','email', 'address', 'details', 'update', 'delete','favoris'];
public dataSource = new MatTableDataSource<Owner>();

@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private router: Router, public dialog: MatDialog ,private FournisseurServices: FournisseurServiceService) { }

openDialog() {
  const dialogRef = this.dialog.open(AddFComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openModal(id): void {
  const dialogRef = this.dialog.open(AffichFComponent, {
    data :{'id':id}
});
  dialogRef.afterClosed().subscribe((result:string) => {
      this.router.navigate(['AffichFComponent',id]);

      console.log('The dialog was closed');
      console.log(result);
  });
}

openModalUpdate(id): void {
const dialogRef = this.dialog.open(UpdateFComponent, {
  data :{'id':id}
});
dialogRef.afterClosed().subscribe((result:string) => {
    this.router.navigate(['UpdateFComponent',id]);

    console.log('The dialog was closed');
    console.log(result);
});
}

ngOnInit(): void {
  this.getAllOwners();

}

 getAllOwners () {
  this.FournisseurServices.getFournisseur().subscribe((response:any) => {
     this.dataSource.data = response as Owner[];
     console.log(response);
     
  })
  
}
openDialog2() {
  const dialogRef = this.dialog.open(FavFComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
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

redirectToDelete  (id) {
this.FournisseurServices.deleteFournisseur(id).subscribe(
  (msg) => {
    console.log(msg)
 
  },
  (error) => {console.log(error)},
  ()=>{this.ngOnInit()}
);

}
relod(){
  this.ngOnInit();
}
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}
}
