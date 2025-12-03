import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-touch',
  imports: [],
  templateUrl: './datepicker-touch.component.html',
  styleUrl: './datepicker-touch.component.css'
})
export class DatepickerTouchComponent {
  control1 = new FormControl();
  control2 = new FormControl();
}
