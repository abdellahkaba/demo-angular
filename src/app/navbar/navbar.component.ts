import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    actions : Array<any> = [
      {title : "Acceuil", "route" : "/home", icon : "house"},
      {title : "Produits", "route" : "/product", icon : "list"},
      {title : "Nouvel Produit", "route" : "/new-product", icon : ""},
    ]

    currentAction : any
  handleCurrentAction(action: any) {
    this.currentAction = action
  }
}
