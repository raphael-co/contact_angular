import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Arr } from '../models/arr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() selectedHero!: Arr;
  @Input() test2?: string;
  @Input() tabpos!: number;

  heroes = this.selectedHero;
  constructor(
    private formcomponent: FormComponent) { }
  arr: Arr[] = []

  ngOnInit() {
    // this.arr = JSON.parse(localStorage.getItem('contact') || '');

    // console.log(this.form)
  }

  changeUserName(e: any,) {
    // console.log(e);
    console.log(this.selectedHero.name)
    console.log(this.selectedHero.id)
    console.log(this.selectedHero.Pseudo)
    console.log(this.selectedHero.Email)
    var kittensFromLocalStorage = JSON.parse(localStorage.getItem('contact') || '');


    console.log(this.tabpos)
    kittensFromLocalStorage[this.tabpos].name = this.selectedHero.name;
    localStorage.setItem("contact", JSON.stringify(kittensFromLocalStorage));

  }


  // onSelect(hero: Arr): void {
  //   // console.log(this.arr)
  //   this.selectedHero = hero;
  //   // this.arr.push(this.selectedHero);

  //   // localStorage.setItem('contact', JSON.stringify(hero));

  // }


}
