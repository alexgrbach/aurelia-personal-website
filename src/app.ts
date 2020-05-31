import { RouterConfiguration, Router } from 'aurelia-router';

import { autoinject, PLATFORM } from 'aurelia-framework'

@autoinject
export class App {
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Alexander Grbach';
    config.map([
      {
        route: '',
        name: 'Home',
        moduleId: './resources/views/home/home',
        title: 'Home',
        nav: false,
      },
      {
        route: 'photography',
        name: 'Photography',
        moduleId: './resources/views/photography/photography',
        title: 'Photography',
        nav: true,
      },
      {
        route: 'code',
        name: 'Code',
        moduleId: './resources/views/code/code',
        title: 'Code',
        nav: true,
      },
      {
        route: 'about',
        name: 'About',
        moduleId: './resources/views/about/about',
        title: 'About',
        nav: true,
      },
    ]);
  }

  public message: string = 'Hello World!';
}
