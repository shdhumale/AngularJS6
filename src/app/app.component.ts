import { HelloComponent } from './hello/hello.component';
import { Component, OnChanges, NgModule } from '@angular/core';


/* function log(target, name, descriptor) {
  console.log('this is inside log funtions  ' + name);
  console.log('descriptor.value  ' + descriptor.value);
  const myValue = descriptor.value;
  descriptor.value = function(...args) {
  console.log ('args--------', args[0]);
  console.log ('args--------', args[1]);
  return (args[0] * args[1]);
  };
 // console.log(target, name, descriptor);
 // return descriptor.value;
}
 */

 /* function log(viewClassName)
 {
   console.log("from class level log",viewClassName);
   return  function (...args)
    {
      console.log("------------",args[0],args[1]);
      new viewClassName(50,60);
   };

 }

 @log
class siddhuClass
{
  constructor(a,b)
  {
    console.log("constructor fired",a,b);
    console.log("multiplication",a*b);
  }
}

const myClass = new siddhuClass(5,20); */

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {
  constructor() {
    console.log ('from constructor', this.aSimpleMethod(5, 2));
    
   }
  title = 'my-app';
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    // tslint:disable-next-line:no-unused-expression
    console.log('ngOnChanges'); ``;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('ngOnDestory');
  }

 /*  constructor() {
    console.log ('from constructor', this.aSimpleMethod(5, 2);
  } */
// @log
 aSimpleMethod(...args) {
  // console.log("Hey there");
  for (const key in args) {
    if (args.hasOwnProperty(key)) {
      console.log('key values', args[key]);
    }
  }
  for (const iterator of args) {

    console.log('iterator-------------', iterator);

  }

  for (let index = 0; index < args.length; index++) {
    // const element = array[index];
    console.log('index', args[index]); 
  }

  // return a * b;
}

}
