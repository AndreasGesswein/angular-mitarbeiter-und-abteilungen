import { Component, OnInit } from '@angular/core';
import { Abteilung } from '../abteilung';
import { AbteilungDataService } from '../abteilung-data.service';

@Component({
  selector: 'app-abteilungs-list',
  templateUrl: './abteilungs-list.component.html',
  styleUrls: ['./abteilungs-list.component.css']
})
export class AbteilungsListComponent implements OnInit {
  constructor(private abteilungDataService: AbteilungDataService) {}

  ngOnInit() {}

  get abteilungen(): Abteilung[] {
    return this.abteilungDataService.abteilungen;
  }

  delete(abteilung: Abteilung) {
    if (abteilung.id && abteilung.bezeichnung) {
      this.abteilungDataService.delete(abteilung);
    }
  }
}
