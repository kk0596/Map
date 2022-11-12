import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapoperator',
  templateUrl: './mapoperator.component.html',
  styleUrls: ['./mapoperator.component.css']
})
export class MapoperatorComponent implements OnInit {

  allowNewUser = false;
  message = 'no click';
  showSecret = false;
  log: any[] = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewUser = true;
    }, 6000)
  }

  ngOnInit(): void {
  }

  messageClick(){
    this.message = 'Button is clicked';
  }

  onToggle(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
