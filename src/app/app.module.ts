import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AbteilungDataService } from './abteilung-data.service';
import { MitarbeiterDataService } from './mitarbeiter-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AbteilungsListComponent } from './abteilungs-list/abteilungs-list.component';
import { MitarbeiterListComponent } from './mitarbeiter-list/mitarbeiter-list.component';
import { AbteilungsFormComponent } from './abteilungs-form/abteilungs-form.component';
import { MitarbeiterFormComponent } from './mitarbeiter-form/mitarbeiter-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutesModule ],
  declarations: [ AppComponent, NavbarComponent, AbteilungsListComponent, MitarbeiterListComponent, AbteilungsFormComponent, MitarbeiterFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AbteilungDataService, MitarbeiterDataService]
})
export class AppModule { }
