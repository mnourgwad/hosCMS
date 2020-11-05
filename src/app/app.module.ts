import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialStuffModule } from './material-stuff.module';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytoolbarComponent } from './mytoolbar/mytoolbar.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { ItemlogComponent } from './itemlog/itemlog.component';
import { DbconnectionService } from './services/dbconnection.service';


@NgModule({
  declarations: [
    AppComponent,    
    MytoolbarComponent,
    ButtonComponent,
    TableComponent,
    ItemlogComponent,
  ],
  imports: [
    BrowserModule,     
    AppRoutingModule,

    MaterialStuffModule,
    Ng5SliderModule,

  ],
  providers: [DbconnectionService],
  bootstrap: [AppComponent],
  entryComponents:[ TableComponent ]
})
export class AppModule { }
