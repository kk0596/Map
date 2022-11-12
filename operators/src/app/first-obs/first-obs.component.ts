import { Component, OnInit } from '@angular/core';
import { AuthserviceService, MyDataType } from '../authservice.service';

@Component({
  selector: 'app-first-obs',
  templateUrl: './first-obs.component.html',
  styleUrls: ['./first-obs.component.css']
})
export class FirstObsComponent implements OnInit {

  subscriptionUsers: MyDataType[] = [];

  constructor(private authService: AuthserviceService) { 
    this.getUsersWithSubscription();
  }

  ngOnInit(): void {
  }

  getUsersWithSubscription() {
    this.authService.getUsersForSubscription().subscribe(res => {
      this.subscriptionUsers = res;
      console.log(
        "getUsersWithSubscription(): " + JSON.stringify(this.subscriptionUsers)
      );
    });
  }

}
