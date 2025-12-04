import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, TouchedChangeEvent} from '@angular/forms';
import {DsfrDatePickerComponent} from "@edugouvfr/ngx-dsfr-ext";
import {filter} from "rxjs";
import {DsfrButtonComponent} from "@edugouvfr/ngx-dsfr";

@Component({
    selector: 'app-datepicker-touch',
    imports: [
        DsfrDatePickerComponent,
        ReactiveFormsModule,
        DsfrButtonComponent
    ],
    templateUrl: './datepicker-touch.component.html',
    styleUrl: './datepicker-touch.component.css',
    standalone: true
})
export class DatepickerTouchComponent implements AfterViewInit {
    control1 = new FormControl();
    control1Evts: string[] = []
    control2 = new FormControl();
    control2Evts: string[] = []

    @ViewChild('datepicker2', {read: ElementRef})
    datepicker2!: ElementRef<HTMLElement>;

    constructor() {
        this.control1.events.pipe(filter(evt => evt instanceof TouchedChangeEvent)).subscribe((evt) => {
            this.control1Evts.push(`TouchedChangeEvent : touched=${evt.touched}`);
        })

        this.control2.events.pipe(filter(evt => evt instanceof TouchedChangeEvent)).subscribe((evt) => {
            this.control2Evts.push(`TouchedChangeEvent : touched=${evt.touched}`);
        })
    }

    ngAfterViewInit(): void {
        this.datepicker2.nativeElement.querySelector('input[type="text"]')?.addEventListener('blur', () => {
            this.control2.markAsTouched();
        });
    }

    markAsUntouchedCtrl2() {
        this.control2.markAsUntouched();
    }
}
