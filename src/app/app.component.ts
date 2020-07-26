import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  show: boolean = true;

  api = [];
  randomJoke = [];

  async fetchApi(){
    await fetch('https://api.icndb.com/jokes')
      .then((r) => r.json())
      .then((r) =>{
        this.api = r.value;
        this.show = true
      })
  }

  async fetchRandomJoke(){
    await fetch('http://api.icndb.com/jokes/random/')
      .then((r) => r.json())
      .then((r) =>{
        this.randomJoke = r.value;
        this.show = false
      })
  }
  
  ngOnInit(): void {
    this.fetchApi();
    console.log(this.show);

  }

}
