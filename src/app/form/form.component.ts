import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Arr } from '../models/arr';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  arr: Arr[] = [];

  test: Arr[] = []

  public id: number = 0;

  public name: any;

  public Pseudo: any;

  public Email: any;

  public jsonX: any;


  tabpos:number=0
  heroes = this.arr;
  selectedHero!: Arr;

  test2: string= ""
  constructor() { }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('contact') || '')

  }

  changeUserName(e: any) {
    console.log(e);
    console.log(this.heroes)
  }



  onSelect(hero: Arr, index: number): void {

    console.log(this.test2)
    this.selectedHero = hero;
    this.test2 = this.selectedHero.name
    console.log(this.test2)
    console.log("re")
    this.tabpos=index
    let json = {
      id: this.arr[index].id,
      name: this.test2,
      Pseudo: this.arr[index].Pseudo,
      Email: this.arr[index].Email,
    }

    // if (this.test2 !== this.test2) {
    //   this.arr.push(json);
    //   localStorage.setItem('contact', JSON.stringify(this.arr));
    // } else {
    //   console.log("hello")
    // }
    // console.log(json)
    // this.arr.push(json);
    // localStorage.setItem('contact', JSON.stringify(this.arr));
    // this.arr.splice(index, 1)
    // localStorage.setItem('contact', JSON.stringify(this.arr));

  }




  //form

  form() {

    if (!this.name || !this.Pseudo || !this.Email) {
      return console.log('pas bon')
    }

    else {
      if (this.arr.length == 0) {
        let json = {
          id: 1,
          name: this.name,
          Pseudo: this.Pseudo,
          Email: this.Email,
        }
        this.arr.push(json);
        localStorage.setItem('contact', JSON.stringify(this.arr));
        this.name = "";
        this.Pseudo = "";
        this.Email = "";
      }
      else {
        let m = this.arr.length - 1
        let json = {
          id: this.arr[m].id + 1,
          name: this.name,
          Pseudo: this.Pseudo,
          Email: this.Email,
        }
        this.arr.push(json);
        localStorage.setItem('contact', JSON.stringify(this.arr));
        this.name = "";
        this.Pseudo = "";
        this.Email = "";
      }
    }

  }

  Recup(id: number, x: Arr) {
    // console.log(id)
    this.id = id
    this.name = name



    this.jsonX = {
      id: x.id,
      name: x.name,
      Pseudo: x.Pseudo,
      Email: x.Email,
    }

    this.jsonX = JSON.stringify(this.jsonX)
    console.log(this.jsonX)


    // alert( JSON.stringify(this.jsonX) )



  }


}