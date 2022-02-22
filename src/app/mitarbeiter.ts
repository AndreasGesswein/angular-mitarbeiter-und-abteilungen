import { Abteilung } from "./abteilung";

export class Mitarbeiter {
  constructor(
    public id?: number,
    public vorname?: string,
    public nachname?: string,
    public gehaltsstufe?: number,
    public gehalt?: number,
    public abteilung?: Abteilung
  ){}
}