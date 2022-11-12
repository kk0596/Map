import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinforkService {

  constructor() { }

  getData() {
    return of({

"persons":[
    {
    "Name":"Karthikeyan","Designation":"Senior Engineer","Age":26,
    "Address":[
        {"D.No":"11/2",
        "Street":"Annai Sathya Nagar",
        "District": "Virudhunagar"}
      ]
    },
    {
    "Name":"Saravanan","Designation":"Software Engineer","age":27,
    "Address":[
        {"D.No":"75",
        "Street":"Villapuram",
        "District":"Madurai"}
      ]},

      {
      "Name":"Varun","Designation":"Team Leader","age":30,
      "Address":[
            {"D.No":"12A",
            "Street":"Kodambakkam",
            "District":"Chennai"}
      ]}
    
    
    ],
      
"totalPerson":2
});
    
  }
}
