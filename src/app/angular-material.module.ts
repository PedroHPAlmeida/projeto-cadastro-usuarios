import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
    ],
})
export class AngularMaterialModule { }
