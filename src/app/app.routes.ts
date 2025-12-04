import { Route } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { DatepickerTouchComponent } from './datepicker/datepicker-touch/datepicker-touch.component';
import {DatepickerValueChangeComponent} from "./datepicker/datepicker-value-change/datepicker-value-change.component";

export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'accueil',
        component: Accueil,
      },
      {
        path: 'datepicker-value-change',
        component: DatepickerValueChangeComponent,
      },
      {
        path: 'datepicker-touch',
        component: DatepickerTouchComponent,
      },
      {
        path: '**',
        redirectTo: 'accueil',
        pathMatch: 'full',
      },
    ],
  },
];
