import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  Details:{};
  data: any;
  selected=[];

  hide_button:boolean = true;


  constructor(private service:DataService) {
  }  
  ngOnInit() {
    this.getData();
  }
getData() {
  this.service.getAll().subscribe(Response=>{
    this.Details=Response;
    console.log(this.Details)
  })
}
delete(a:Number) {
this.service.remove(a).subscribe(resp=>{
  console.log(resp);
  this.getData();
})
}



  
check(item){
  if(this.selected.indexOf(item) != -1){
    return true;
  }
}
selectId(checked, item){
  if(checked){
  var data=this.selected.push(item);
  console.log(data)
  } else {
    this.selected.splice(this.selected.indexOf(item), 1)
  }

  if(data > 1){
    
    this.hide_button = false;
  }
}
deleteAll() {
  for (var food in this.selected) {
    this.service.removeAll(this.selected[food].id)
      .subscribe(data =>{
       console.log(data);
       this.getData();
      }   
      ) 
}

}
}
