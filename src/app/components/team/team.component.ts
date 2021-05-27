import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public team: Array<Profile>;
  constructor(private dataService: DataService) {
    this.team = dataService.teamList;
  }

  ngOnInit(): void {}
}
