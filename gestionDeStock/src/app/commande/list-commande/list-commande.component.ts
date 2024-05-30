import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommandeSeviceService } from 'app/service/commande-sevice.service';
import { ProduitServiceService } from 'app/service/produit-service.service';
import { AddCommandeComponent } from '../add-commande/add-commande.component';
import { AffichCommandeComponent } from '../affich-commande/affich-commande.component';
import { UpdateCommandeComponent } from '../update-commande/update-commande.component';

declare var $: any;

export interface commandes{
  refCommande : String,
  montant_total :String,
  date_commande:Date,
}

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})

export class ListCommandeComponent implements OnInit {

  
  public displayedColumns = ['ref-Commande',' montant_total ', 'date_commande', 'details', 'update', 'delete','Validee'];
  public dataSource = new MatTableDataSource<commandes>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private commandeServices: CommandeSeviceService,private router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.commandeServices.getCommande().subscribe((response:any) => {
        this.dataSource.data = response as commandes[];
   })
  }

  // openDialog2() {
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  openModal(id): void {
    const dialogRef = this.dialog.open(AffichCommandeComponent, {
      data :{'id':id}
 });
    dialogRef.afterClosed().subscribe((result:string) => {
        this.router.navigate(['AffichClientComponent',id]);

        console.log('The dialog was closed');
        console.log(result);
    });
}

openModalUpdate(id): void {
  const dialogRef = this.dialog.open(UpdateCommandeComponent, {
    data :{'id':id}
});
  dialogRef.afterClosed().subscribe((result:string) => {
      this.router.navigate(['UpdateClientComponent',id]);

      console.log('The dialog was closed');
      console.log(result);
  });
}



listmsg:any;
 
  valide(id){
    this.commandeServices.validation(id).subscribe(
      (msg) => {
        this.listmsg=msg;
       this.showNotification();
         },
      (error) =>{console.log(error)} ,
      ()=>{this.ngOnInit()}
    )
  
  }

 redirectToDelete  (id) {
  this.commandeServices.deleteCommande(id).subscribe(
    (msg) => {
      this.listmsg=msg;
      this.showNotification();
    },
    (error) =>{console.log(error)} ,
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
  showNotification(){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: this.listmsg.message

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: 'top',
            align: 'center'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
}
