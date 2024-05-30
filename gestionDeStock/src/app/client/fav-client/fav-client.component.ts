import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientServiceService } from 'app/service/client-service.service';

export interface fav{
  nameClient : String,
  adresseClient :String,
  emailClient : String,
  telpClient:String
}

@Component({
  selector: 'app-fav-client',
  templateUrl: './fav-client.component.html',
  styleUrls: ['./fav-client.component.css']
})
export class FavClientComponent implements OnInit {

  public displayedColumns = ['ref-client','name', 'telephone','email', 'address'];
  public dataSource = new MatTableDataSource<fav>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, public dialog: MatDialog ,private ClientServices: ClientServiceService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }
  getAllOwners () {
    this.ClientServices.getFavClient().subscribe((response:any) => {
       this.dataSource.data = response as fav[];
    })

}
}
