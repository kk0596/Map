import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  mydata: MyDataType[] = [
    {"id":1, "name":"Karthick"},
    {"id":2, "name":"Rohan"},
    {"id":3, "name":"Bhuvan"},
  ];
  constructor() { }

  getUsersForSubscription():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>(observer => {
          setTimeout(() => {
            observer.next(this.mydata);
          }, 3000);
    });
    return data;
  }

}

export class MyDataType
{
  public id: number | undefined;
  public name: string | undefined;
}