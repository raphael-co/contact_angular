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
  @Input() tabpos!: number;

  heroes = this.selectedHero;
  constructor(
    private formcomponent: FormComponent) { }
  arr: Arr[] = []

  ngOnInit() {
  }
  changeUserName() {
    var kittensFromLocalStorage = JSON.parse(localStorage.getItem('contact') || '');
    console.log(this.tabpos)
    kittensFromLocalStorage[this.tabpos].name = this.selectedHero.name;
    localStorage.setItem("contact", JSON.stringify(kittensFromLocalStorage));

  }
}
