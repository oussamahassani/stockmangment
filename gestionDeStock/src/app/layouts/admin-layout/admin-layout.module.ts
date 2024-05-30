import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {MatTabsModule} from '@angular/material/tabs';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AddUserComponent } from 'app/user/add-user/add-user.component';
import { ListClientComponent } from 'app/client/list-client/list-client.component';
import { AddProduitComponent } from 'app/produit/add-produit/add-produit.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AddClientComponent } from 'app/client/add-client/add-client.component';
import { AddFComponent } from 'app/fournisseurs/add-f/add-f.component';
import { ListFComponent } from 'app/fournisseurs/list-f/list-f.component';
import { UpdateFComponent } from 'app/fournisseurs/update-f/update-f.component';
import { ListProduitComponent } from 'app/produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from 'app/produit/update-produit/update-produit.component';
import { UpdateClientComponent } from 'app/client/update-client/update-client.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule } from '@angular/material/paginator';
import { FavClientComponent } from 'app/client/fav-client/fav-client.component';
import { AffichFComponent } from 'app/fournisseurs/affich-f/affich-f.component';
import { CategorieComponent } from 'app/produit/categorie/categorie.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FavFComponent } from 'app/fournisseurs/fav-f/fav-f.component';
import { PackComponent } from 'app/produit/pack/pack.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { AffichProduitComponent } from 'app/produit/affich-produit/affich-produit.component';
import { AffichClientComponent } from 'app/client/affich-client/affich-client.component';
import { ListCommandeComponent } from 'app/commande/list-commande/list-commande.component';
import { AddCommandeComponent } from 'app/commande/add-commande/add-commande.component';
import { UpdateCommandeComponent } from 'app/commande/update-commande/update-commande.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AffichCommandeComponent } from 'app/commande/affich-commande/affich-commande.component';
import { AddFactureComponent } from 'app/facture/add-facture/add-facture.component';
import { ListFactureComponent } from 'app/facture/list-facture/list-facture.component';
import { AffichFactureComponent } from 'app/facture/affich-facture/affich-facture.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    NgxMatSelectSearchModule
  ],
  declarations: [
    UserProfileComponent,
    NotificationsComponent,
    AddUserComponent,
    ListClientComponent,
    AddProduitComponent,
    DashboardComponent,
    AddClientComponent, 
    AddFComponent,
    ListFComponent,
    UpdateFComponent,
    ListProduitComponent,
    UpdateProduitComponent,
    UpdateClientComponent,
    AffichFComponent,
    FavClientComponent,
    CategorieComponent,
    FavFComponent,
    PackComponent,
    AffichClientComponent,
    AffichProduitComponent,
    ListCommandeComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    AffichCommandeComponent,
    AddFactureComponent,
    ListFactureComponent,
    AffichFactureComponent,

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})

export class AdminLayoutModule {}
