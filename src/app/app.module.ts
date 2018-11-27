import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule} from '@angular/forms';
import { RecordService } from './record.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HelloComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [RecordService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
