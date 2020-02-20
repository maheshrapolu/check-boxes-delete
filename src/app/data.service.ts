import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get(" http://localhost:3000/details")
  }
  remove(s){
    return this.http.delete(`${"http://localhost:3000/details"}/${s.id}`)
  }
  removeAll(id) {
    return this.http.delete('http://localhost:3000/details/'+id)
     
  }  
}
