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
  errors = [];
  newAnimal;

  // tasks;
  constructor(private _httpService: HttpService){ }

  ngOnInit(){
    this.getAnimals();
    this.newAnimal = {
      name:"",
      color:"",
      favoriteFood:""
    }
  }

  getAnimals(){
    let observable = this._httpService.getAnimals();
    observable.subscribe(data => {
      this.animals = data['results'];
      console.log("We got our tasks!",data);
      console.log("hello");
      console.log(data);
    });
  }
  getOne(id){
    let observable = this._httpService.getOne(id);
    observable.subscribe(data => {
      this.animal = data['result'];
      console.log("wassup");
      console.log(data);
    });
  }
  closeDetails(){
    this.animal = null;
    console.log("hi");
  }

  createAnimal(){
    this.errors = [];
    let obs = this._httpService.createAnimal(this.newAnimal);
    obs.subscribe(data => {
      if(data['results']){
        this.newAnimal = {name:"",color:"",favoriteFood:""};
      }
      else{
        if(data['errors']['color']){
          this.errors.push(data['errors']['color']['message'])
        }
        if(data['errors']['name']){
          this.errors.push(data['errors']['name']['message'])
        }
        if(data['errors']['favoriteFood']){
          this.errors.push(data['errors']['favoriteFood']['message'])
        }
      }
    })
  }

}
