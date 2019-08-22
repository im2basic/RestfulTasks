import { Component, OnInit } from '@angular/core';

//--IMPORT--
import {HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Animals!';
  animals;
  animal;

  // tasks;
  constructor(private _httpService: HttpService){ }

  ngOnInit(){

  }

  getAnimals(){
    let observable = this._httpService.getAnimals();
    observable.subscribe(data => {
      this.animals = data['results'];
      console.log("We got our tasks!",data);
    });
  }
  getOne(id){
    let observable = this._httpService.getOne(id);
    observable.subscribe(data => {
      this.animal = data['result'];
      console.log("wassup");
    });
  }
  closeDetails(){
    this.animal = null;
    console.log("hi");
  }

}
