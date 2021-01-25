import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  public redirecToClotheSelection(param: any) {
    const navExtras: NavigationExtras = {
      state: {param}
    };
    this.router.navigate(['/clothe-selection'], navExtras);
  }

}
