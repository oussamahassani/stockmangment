import { Routes } from '@angular/router';


import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { AddUserComponent } from 'app/user/add-user/add-user.component';
import { AdminComponent } from 'app/user/admin/admin.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

import { ListFComponent } from 'app/fournisseurs/list-f/list-f.component';
import { ListProduitComponent } from 'app/produit/list-produit/list-produit.component';
import { ListClientComponent } from 'app/client/list-client/list-client.component';
import { UpdateClientComponent } from 'app/client/update-client/update-client.component';
import { AffichClientComponent } from 'app/client/affich-client/affich-client.component';
import { ListCommandeComponent } from 'app/commande/list-commande/list-commande.component';
import { AddCommandeComponent } from 'app/commande/add-commande/add-commande.component';
import { AffichCommandeComponent } from 'app/commande/affich-commande/affich-commande.component';
import { AuthServiceService } from 'app/service/auth-service.service';
import { AuthGuard } from 'app/auth.guard';
import { AffichFactureComponent } from 'app/facture/affich-facture/affich-facture.component';
import { ListFactureComponent } from 'app/facture/list-facture/list-facture.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, 
    
  
     { path: 'user-profile',   component: UserProfileComponent },
    { path: 'dashboard',      component: DashboardComponent },
     { path: 'notifications',  component: NotificationsComponent },

    //  { path: 'commande', 
    //   children: [
    //     {
    //        path: '',
    //        component: AddCommandeComponent
    //        }
    //        , {
    //         path: 'detail/:id',
    //        component: AffichCommandeComponent
    //        }] },

    { path: 'client',  component: ListClientComponent },
    { path: 'commande',  component: AddCommandeComponent },
    { path: 'fournisseur',  component: ListFComponent },
    { path: 'produit',  component: ListProduitComponent },
    { path: 'facture',  component: ListFactureComponent },
    {
       path: 'user', 
     component: AddUserComponent,
    
     },
     {path:"listUser", component:AdminComponent}
    
];
