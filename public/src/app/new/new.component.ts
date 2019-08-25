import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  newAnimal;
  ngOnInit() {
    this.newAnimal = {name: "", color: "", favoriteFood: ""};
  }

  // createAnimal(){
  //   let obs = this._httpService.createAnimal(this.newAnimal);
  //   obs.subscribe(data => {
  //     if(data['results']){
  //       this.newAnimal = {name:"", color:"", favoriteFood:""};
  //     }
  //     else{
  //       console.log(data['errors']);
  //     }
  //   })
  // }

}
