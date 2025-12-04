import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {DsfrLinkComponent} from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'app-root',
  template: `
      <div class="fr-container">
          <h1>DSFR Stackblitz</h1>
          <ul>
              <li>
                  <dsfr-link label="datepicker value change problem" routePath="datepicker-value-change"/>
              </li>
            <li>
                  <dsfr-link label="datepicker touched problem" routePath="datepicker-touch"/>
              </li>
          </ul>
          <router-outlet/>
      </div>
  `,
  imports: [RouterOutlet, DsfrLinkComponent],
})
export class App {
}

bootstrapApplication(App, appConfig);
