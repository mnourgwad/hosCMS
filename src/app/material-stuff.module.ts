import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material GUI modules
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatStepperModule,
  MatSelectModule,
  MatTableModule,
  MatMenuModule,
  MatDividerModule,
  MatSidenavModule,
  MatRadioModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatGridListModule,
  
  MatCheckboxModule,
  MatDialogModule,
  MatListModule,
  MatTabsModule,
  MatBadgeModule,
  
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatRadioModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatGridListModule,

    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatRadioModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatGridListModule,
    
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
  ]
})
export class MaterialStuffModule { }
