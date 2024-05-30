import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  Router } from '@angular/router';
import { ClientServiceService } from 'app/service/client-service.service';
import { AddClientComponent } from '../add-client/add-client.component';
import { AffichClientComponent } from '../affich-client/affich-client.component';
import { FavClientComponent } from '../fav-client/fav-client.component';
import { UpdateClientComponent } from '../update-client/update-client.component';


export interface Owner{
  nameClient : String,
  adresseClient :String,
  emailClient : String,
  telpClient:String
}

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit , AfterViewInit{


public displayedColumns = ['ref-client','name', 'telephone','email', 'address', 'details', 'update', 'delete','favoris'];
  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private router: Router, public dialog: MatDialog ,private ClientServices: ClientServiceService) { }
  
  ngOnInit(): void {
    this.getAllOwners();
  
  }

   getAllOwners () {
    this.ClientServices.getClient().subscribe((response:any) => {
       this.dataSource.data = response as Owner[];
       console.log("hello",response);
       
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(FavClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openModal(id): void {
    const dialogRef = this.dialog.open(AffichClientComponent, {
      data :{'id':id}
 });
    dialogRef.afterClosed().subscribe((result:string) => {
        this.router.navigate(['AffichClientComponent',id]);

        console.log('The dialog was closed');
        console.log(result);
    });
}

openModalUpdate(id): void {
  const dialogRef = this.dialog.open(UpdateClientComponent, {
    data :{'id':id}
});
  dialogRef.afterClosed().subscribe((result:string) => {
      this.router.navigate(['UpdateClientComponent',id]);

      console.log('The dialog was closed');
      console.log(result);
  });
}



    
 
  favoris(id){
    this.ClientServices.favoris(id).subscribe(
      (msg) => {
        console.log(msg)
      },
      (error) => {console.log(error)},
      ()=>{this.ngOnInit()}
    );
  }

 redirectToDelete  (id) {
   
   
  this.ClientServices.deleteClient(id).subscribe(
    (message) => {
      console.log(message)
    },
    (error) => {console.log("error")},
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
