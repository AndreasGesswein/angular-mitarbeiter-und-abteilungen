import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AbteilungsListComponent } from '../abteilungs-list/abteilungs-list.component';
import { MitarbeiterListComponent } from '../mitarbeiter-list/mitarbeiter-list.component';
import { AbteilungsFormComponent } from '../abteilungs-form/abteilungs-form.component';
import { MitarbeiterFormComponent } from '../mitarbeiter-form/mitarbeiter-form.component';

const routes: Routes = [
  { path: '', component: AbteilungsListComponent },

  { path: 'abteilungsubersicht', component: AbteilungsListComponent },
  { path: 'abteilungsform', component: AbteilungsFormComponent },
  { path: 'abteilungsform/:id', component: AbteilungsFormComponent },

  { path: 'mitarbeiterubersicht', component: MitarbeiterListComponent },
  { path: 'mitarbeiterform', component: MitarbeiterFormComponent },
  { path: 'mitarbeiterform/:id', component: MitarbeiterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
