import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'app/service/auth-service.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export let ROUTES: RouteInfo[] = []

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  superadminRole = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'Mon Profile',  icon:'person', class: '' },
    { path: '/user', title: 'Users', icon: 'person_add', class: '' },
    { path: '/listUser', title: 'Liste Users', icon: 'people', class: '' },
    { path: '/produit', title: 'Produits', icon: 'local_grocery_store', class: '' },
    { path: '/client', title: 'Clients', icon: 'directions_walk', class: '' },

    { path: '/fournisseur', title: 'Fournisseurs', icon: 'business', class: '' },

    { path: '/commande', title: 'Commandes', icon: 'fact_check', class: '' },
    { path: '/facture', title: 'Factures', icon: 'business_center', class: '' },

  ];
  adminRole = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'Mon Profile',  icon:'person', class: '' },
    { path: '/user', title: 'Users', icon: 'person_add', class: '' },
    { path: '/listUser', title: 'Liste Users', icon: 'people', class: '' },


  ];
  acheteurRole = [

    { path: '/produit', title: 'Produits', icon: 'local_grocery_store', class: '' },


    { path: '/fournisseur', title: 'Fournisseurs', icon: 'business', class: '' },


  ];
  surveillantRole = [
    { path: '/client', title: 'Clients', icon: 'directions_walk', class: '' },

    { path: '/commande', title: 'Commandes', icon: 'fact_check', class: '' },


  ];
  constructor(public authServiceService: AuthServiceService) { }

  ngOnInit() {
    let role = localStorage.getItem('role');
    if (role == "SUPER_ADMIN") {
      ROUTES = this.superadminRole;
    }
    if (role == "ADMIN") {
      ROUTES = this.adminRole;
    }
    else if (role == "ACHETEUR") {
      ROUTES = this.acheteurRole;
    }
    else if (role == "SURVEILLENT") {
      ROUTES = this.surveillantRole
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
  admin(a) {
    const c = this.authServiceService.UserAuthentificated();

    if (a === "Users") {
      if (c) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
