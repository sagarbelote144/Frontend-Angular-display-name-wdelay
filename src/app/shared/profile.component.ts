import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    fName:string;
    mName:string;
    lName:string;

  constructor(private getName: ApiService) { }

  ngOnInit() {
      this.getName.getFirstName().then((data) => {
        this.fName = data;
      });
      this.getName.getMiddleName().then((data) => {
        this.mName = data;
      });
      this.getName.getLastName().then((data) => {
        this.lName = data;
      });
    }
}