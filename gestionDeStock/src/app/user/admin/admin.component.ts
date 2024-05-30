import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {AuthServiceService} from '../../service/auth-service.service'
export interface Owner{ 
  firstName : String, 
  lastName : String,
  telp : String,
  adresse : String,
  email : String,
  age : String,
  }

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public displayedColumns = ['firstName','lastName', 'telp','adresse', 'email', 'age', 'delete'];
  public dataSource = new MatTableDataSource<Owner>()
  constructor(private authServiceService : AuthServiceService) { }

  ngOnInit(): void {
    this.getAllOwners();
  
  }

   getAllOwners () {
    this.authServiceService.getUser().subscribe((response:any) => {
       this.dataSource.data = response as Owner[];
    })
  }
  redirectToDelete  (id) {
    this.authServiceService.deleteUser(id).subscribe(
      (msg) => {
        console.log(msg)
        this.getAllOwners()
      },
      (error) => {console.log(error)},
      ()=>{this.ngOnInit()}
    ); 
    }
}
