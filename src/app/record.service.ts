import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

constructor(private myHtpClient: HttpClient) { }

getData()
{
  /* return [
    {
      name:"siddhuservice1",
      online:"true"
    },
    {
      name:"siddhuservice2",
      online:"false"
    },
    {
      name:"siddhuservice3",
      online:"true"
    }      
  ]*/
  return this.myHtpClient.get('http://localhost:2303/');
  //for proxy configuration 
  //return this.myHtpClient.get('/api');
}

}
