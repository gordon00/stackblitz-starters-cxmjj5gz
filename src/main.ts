import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DsfrLink, DsfrLinkComponent } from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'app-root',
  template: `
  <h1>DSFR Stackblitz</h1>
<ul>
  <li><dsfr-link label="datepicker touched" routePath="datepicker-touch"/></li>
</ul>
   <router-outlet/>
  `,
  imports: [RouterOutlet, DsfrLinkComponent],
})
export class App {
  links: DsfrLink[] = [
    {
      label: 'Accueil',
      routerLink: [''],
    },
    {
      label: 'User list',
      routerLink: ['user-list'],
    },
    {
      label: 'User',
      routerLink: ['user-list', 'user'],
    },
    {
      label: 'Blabla',
    },
  ];
}

bootstrapApplication(App, appConfig);
