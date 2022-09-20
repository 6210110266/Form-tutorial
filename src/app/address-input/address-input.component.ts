import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent implements OnInit {
  @Input() addressForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
