import {Component, DestroyRef, inject} from '@angular/core';
import {
    ControlEvent,
    FormControl, PristineChangeEvent,
    ReactiveFormsModule,
    StatusChangeEvent,
    TouchedChangeEvent,
    ValueChangeEvent
} from '@angular/forms';
import {DsfrDateEvent, DsfrDatePickerComponent} from "@edugouvfr/ngx-dsfr-ext";
import {filter} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {DsfrAccordionComponent, DsfrAccordionsGroupComponent} from "@edugouvfr/ngx-dsfr";

@Component({
    selector: 'app-datepicker-touch',
    imports: [
        DsfrDatePickerComponent,
        ReactiveFormsModule,
        DsfrAccordionComponent,
        DsfrAccordionsGroupComponent
    ],
    templateUrl: './datepicker-value-change.component.html',
    standalone: true
})
export class DatepickerValueChangeComponent {
    private readonly destroyRef = inject(DestroyRef);
    control1 = new FormControl<string | null>(null);
    control1Evts: string[] = []

    control2 = new FormControl<string | null>(null, () => ({
        alwaysInError: true
    }));
    control2Evts: string[] = []

    constructor() {
        this.control1.events.pipe(takeUntilDestroyed(this.destroyRef), filter(evt => evt instanceof ValueChangeEvent))
            .subscribe((evt) => {
                this.control1Evts.unshift(`ValueChangeEvent : value=${evt.value}`);
            })

        // !!! le valueChange ne semble pas fonctionner correctement
        this.control1.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => this.control1Evts.unshift(`valueChanges : ${value}`));

        this.control2.events.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((evt) => {
                this.control2Evts.unshift(this.transformEvt(evt));
            })

        // !!! le valueChange ne semble pas fonctionner correctement
        this.control2.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => this.control2Evts.unshift(`valueChanges : ${value}`));
    }

    private transformEvt(event: ControlEvent<string | null>): string {
        if (event instanceof StatusChangeEvent) {
            return `StatusChangeEvent status=${event.status}`;
        } else if (event instanceof ValueChangeEvent) {
            return `ValueChangeEvent value=${event.value}`;
        } else if (event instanceof TouchedChangeEvent) {
            return `TouchedChangeEvent touched=${event.touched}`;
        } else if (event instanceof PristineChangeEvent) {
            return `PristineChangeEvent pristine=${event.pristine}`;
        }

        return event.toString();
    }

    getErrorMessage(ctrl: FormControl): string | undefined {
        if (ctrl.valid) {
            return undefined;
        }

        return Object.keys(ctrl.errors!).join(", ");
    }

    onDateChangeCtrl1(event: DsfrDateEvent) {
        this.control1Evts.unshift(`DsfrDateEvent : value=${event.value}, date=${event.date}`);
    }

    onDateChangeCtrl2(event: DsfrDateEvent) {
        this.control2Evts.unshift(`DsfrDateEvent : value=${event.value}, date=${event.date}`);
    }
}
