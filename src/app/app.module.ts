import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule} from '@angular/forms';
import { RecordService } from './record.service';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';


@NgModule({
   declarations: [
      AppComponent,
      HelloComponent,
      DataComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
         {
            path: 'data',
            component: DataComponent
         },
         {
            path: '',
            component: HomeComponent
         }
      ])
   ],
   providers: [
      RecordService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
