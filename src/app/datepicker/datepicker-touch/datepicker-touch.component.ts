import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DsfrDatePickerComponent} from "@edugouvfr/ngx-dsfr-ext";
import {DsfrAccordionComponent, DsfrButtonComponent} from "@edugouvfr/ngx-dsfr";

@Component({
    selector: 'app-datepicker-touch',
    imports: [
        DsfrDatePickerComponent,
        ReactiveFormsModule,
        DsfrButtonComponent,
        DsfrAccordionComponent
    ],
    templateUrl: './datepicker-touch.component.html',
    styleUrl: './datepicker-touch.component.css',
    standalone: true
})
export class DatepickerTouchComponent implements AfterViewInit {
    control1 = new FormControl();
    control2 = new FormControl();

    @ViewChild('datepicker2', {read: ElementRef})
    datepicker2!: ElementRef<HTMLElement>;

    ngAfterViewInit(): void {
        this.datepicker2.nativeElement.querySelector('input[type="text"]')?.addEventListener('blur', () => {
            this.control2.markAsTouched();
        });
    }

    markAsUntouchedCtrl2() {
        this.control2.markAsUntouched();
    }
}
