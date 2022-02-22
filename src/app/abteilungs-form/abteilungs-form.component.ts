import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abteilung } from '../abteilung';
import { AbteilungDataService } from '../abteilung-data.service';

@Component({
  selector: 'app-abteilungs-form',
  templateUrl: './abteilungs-form.component.html',
  styleUrls: ['./abteilungs-form.component.css']
})
export class AbteilungsFormComponent implements OnInit {
  abteilung: Abteilung;
  editMode: boolean;
  error: boolean = false;
  constructor(
    private routes: Router,
    private abteilungDataService: AbteilungDataService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.editMode = true;
      this.abteilung = this.abteilungDataService.getAbteilungById(id);
    } else {
      this.editMode = false;
      this.abteilung = new Abteilung();
    }
  }

  ngOnInit() {}

  save() {
    if (this.abteilung.id && this.abteilung.bezeichnung) {
      if (!this.editMode) {
        this.abteilungDataService.save(this.abteilung);
      }
      this.routes.navigateByUrl('/abteilungsubersicht');
      this.error = false;
    } else {
      this.error = true;
    }
  }
}
