import { Component, OnInit } from '@angular/core';
import { Str } from './classes/strlist';
import { MsgService } from './msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  showTable:any = false;
  selectedRowIndex:any;
  data1:any = "кое какой техт+\r\nперенос строки";
  strs: Str[]=[];

  constructor(private httpService: MsgService){}


  ngOnInit(){
  this.httpService.getLine().subscribe((data:any) => this.strs=data['UserList']);
  }

  clickRow(row:any){
  this.selectedRowIndex=row.position;
  console.log(row);
  }

}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: "Hydfvsdfbvcrtcg<br>ro/r/ngen", weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
