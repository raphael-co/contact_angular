import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';


export class Arr {
  name!: string;
  Pseudo!: string;
  Email!: string;
  id!: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  arr: Arr[] = [];
  test: Arr[] = []

  public id: number = 0;
  public erreur: any;
  public jsonX: any;
  tabpos: number = 0
  heroes = this.arr;
  selectedHero!: Arr;
  test2: string = ""
  constructor(private formBuilder: FormBuilder) { }

  bioSection = new FormGroup({
    name: new FormControl(''),
    Pseudo: new FormControl(''),
    Email: new FormControl(''),
  });

  callingFunction() {
    if (!this.bioSection.value.Email || !this.bioSection.value.Pseudo || !this.bioSection.value.name) {
      this.erreur = "il faut au moins 1 caractere par champs"
    }
    else {
      this.erreur = "succés de l'enregistrement"

      if (this.arr.length == 0) {
        let json = {
          id: 1,
          name: this.bioSection.value.name,
          Pseudo: this.bioSection.value.Pseudo,
          Email: this.bioSection.value.Email,
        }
        this.arr.push(json);
        localStorage.setItem('contact', JSON.stringify(this.arr));
      }
      else {
        let m = this.arr.length - 1
        let json = {
          id: this.arr[m].id + 1,
          name: this.bioSection.value.name,
          Pseudo: this.bioSection.value.Pseudo,
          Email: this.bioSection.value.Email,
        }
        this.arr.push(json);
        localStorage.setItem('contact', JSON.stringify(this.arr));
      }
    }


  }
  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('contact') || '')

  }

  onSelect(hero: Arr, index: number): void {
    this.selectedHero = hero;
    this.tabpos = index
  }

  Recup(id: number, x: Arr) {
    this.id = id
    this.jsonX = {
      id: x.id,
      name: x.name,
      Pseudo: x.Pseudo,
      Email: x.Email,
    }

    this.jsonX = JSON.stringify(this.jsonX)

  }


}