import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class Home {

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate(route)
  }

}
