import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  bitWise = 2 | 5;
  myVar = "SiddhuVar";
  myDisableValue = false;
  myText = "SiddhuTextChangedOne";
  //myArrayData = [];
  /* myArrayData = [
    {
      name:"sidd1",
      online:"true"
    },
    {
      name:"sidd2",
      online:"true"
    },
    {
      name:"sidd3",
      online:"true"
    },
    {
      name:"sidd4",
      online:"true"
    }
  ]; */

  constructor(private myService : RecordService) {

   /*  this.myDisableValue = false;
    this.testMyNgFor(2, 3, 4);
    console.log("this.getmyArray",this.getmyArray()); */
  }

  ngOnInit() {
   /* this.myService.getData().subscribe(data => {
     //this will populate data on the screen. 
        this.myArrayData = data;
    }); */
  }

  add(a, b) {
    return a + b;
  }
  returnDiable() {
    return this.myDisableValue;
  }

  myFunction() {
    this.myDisableValue = true;
    console.log("called from the html button click");
  }


  testMyNgFor(...args) {
    for (let index = 0; index < args.length; index++) {
      const element = args[index];
      console.log("element ================", element);

    }

    args.forEach(element => {
      console.log("element------", element);

    });

    for (const key in args) {
      if (args.hasOwnProperty(key)) {
        const element = args[key];
        console.log("element", element);
      }
    }

    for (const iterator of args) {
      console.log("iterator", iterator);
    }
  }

  //this is now not used any more in the project
 /*  funtion getmyArray()
  {
    return [
      {
        name:"sidd1",
        online:"true"
      },
      {
        name:"sidd2",
        online:"true"
      },
      {
        name:"sidd3",
        online:"true"
      },
      {
        name:"sidd4",
        online:"true"
      }
    ]
  } */
}

