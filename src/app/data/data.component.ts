import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  myArrayData=[];
   
  constructor(private myService : RecordService) { }

  ngOnInit() {
   this.myService.getData().subscribe(
    (data: any) => {
          //data = JSON.parse(data['_body']);
          console.log("data",data);
          this.myArrayData = data;
      },
      err => console.log(err), // error
      () => console.log('getData Complete') // complete      
    );
  }

}
