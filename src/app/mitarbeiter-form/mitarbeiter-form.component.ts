import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abteilung } from '../abteilung';
import { AbteilungDataService } from '../abteilung-data.service';
import { Mitarbeiter } from '../mitarbeiter';
import { MitarbeiterDataService } from '../mitarbeiter-data.service';

@Component({
  selector: 'app-mitarbeiter-form',
  templateUrl: './mitarbeiter-form.component.html',
  styleUrls: ['./mitarbeiter-form.component.css']
})
export class MitarbeiterFormComponent implements OnInit {
  mitarbeiter: Mitarbeiter;
  editMode: boolean;
  error: boolean = false;

  constructor(
    private mitarbeiterDataService: MitarbeiterDataService,
    private abteilungDataService: AbteilungDataService,
    private route: ActivatedRoute,
    private routes: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.mitarbeiter = this.mitarbeiterDataService.getMitarbeiterById(id);
      this.editMode = true;
    } else {
      this.mitarbeiter = new Mitarbeiter();
      this.editMode = false;
    }
  }

  ngOnInit() {}

  get abteilungen(): Abteilung[] {
    return this.abteilungDataService.abteilungen;
  }

  save() {
    if (
      this.mitarbeiter.id &&
      this.mitarbeiter.vorname &&
      this.mitarbeiter.nachname &&
      this.mitarbeiter.gehaltsstufe &&
      this.mitarbeiter.gehalt &&
      this.mitarbeiter.abteilung
    ) {
      if (!this.editMode) {
        this.mitarbeiterDataService.save(this.mitarbeiter);
      }

      this.routes.navigateByUrl('/mitarbeiterubersicht');
      this.error = false;
    } else {
      this.error = true;
    }
  }
}
