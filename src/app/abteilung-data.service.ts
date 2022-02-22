import { Injectable } from '@angular/core';
import { Abteilung } from './abteilung';

@Injectable()
export class AbteilungDataService {
  abteilungen: Abteilung[] = [];

  constructor() {
    this.abteilungen.push(new Abteilung(1, 'Rp'));
    this.abteilungen.push(new Abteilung(2, 'Mathe'));
    this.abteilungen.push(new Abteilung(3, 'Deutsch'));
    this.abteilungen.push(new Abteilung(4, 'Englisch'));
  }

  getAbteilungById(id: number): Abteilung {
    for (let i = 0; i < this.abteilungen.length; i++) {
      if (this.abteilungen[i].id == id) {
        return this.abteilungen[i];
      }
    }
    return null;
  }

  save(abteilung: Abteilung) {
    this.abteilungen.push(abteilung);
  }

  delete(abteilung: Abteilung) {
    this.abteilungen = this.abteilungen.filter(i => i !== abteilung);
  }
}
