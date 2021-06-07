import { Injectable } from '@angular/core';
import { Str } from './classes/strlist';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http:HttpClient) { }

  getLine(){
    return this.http.get('http://localhost/test.php')
  }





}
