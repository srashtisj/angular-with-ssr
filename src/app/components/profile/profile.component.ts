import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { DataService } from 'src/app/services/data.service';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profile!: Profile;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService
  ) {
    this.route.params.subscribe((queryParams) => {
      this.profile = this.dataService.getProfileById(parseInt(queryParams['id']));
    });
  }

  ngOnInit(): void {}
}
