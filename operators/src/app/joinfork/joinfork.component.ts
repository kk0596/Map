import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from "rxjs/operators";
import { JoinforkService } from '../joinfork.service';

@Component({
  selector: 'app-joinfork',
  templateUrl: './joinfork.component.html',
  styleUrls: ['./joinfork.component.css']
})
export class JoinforkComponent implements OnInit {

  data = {};

  constructor(forkService: JoinforkService) {
    forkJoin(forkService.getData(), forkService.getData())
      .pipe(
        map(x => {
          // const orders = [...x[0]["persons"], ...x[1]["persons"]];
          const orders = [...x[0]["persons"]];
          return {
            orders: orders,
            totalOrders: orders.length
          };
        })
      )
      .subscribe(x => {
        console.log(x);
        this.data = x;
      });
  }

  ngOnInit(): void {
  }

}
