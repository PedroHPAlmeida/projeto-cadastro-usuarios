import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
    ],
})
export class AngularMaterialModule { }
