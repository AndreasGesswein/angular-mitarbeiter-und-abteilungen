import { Component, OnInit } from '@angular/core';
import { Mitarbeiter } from '../mitarbeiter';
import { MitarbeiterDataService } from '../mitarbeiter-data.service';

@Component({
  selector: 'app-mitarbeiter-list',
  templateUrl: './mitarbeiter-list.component.html',
  styleUrls: ['./mitarbeiter-list.component.css']
})
export class MitarbeiterListComponent implements OnInit {
  constructor(private mitarbeiterDataService: MitarbeiterDataService) {}

  ngOnInit() {}
  get mitarbeiter(): Mitarbeiter[] {
    return this.mitarbeiterDataService.mitarbeiter;
  }

  delete(mitarbeiter: Mitarbeiter) {
    if (
      mitarbeiter.id &&
      mitarbeiter.vorname &&
      mitarbeiter.nachname &&
      mitarbeiter.gehaltsstufe &&
      mitarbeiter.gehalt &&
      mitarbeiter.abteilung
    ) {
      this.mitarbeiterDataService.delete(mitarbeiter);
    }
  }
}
