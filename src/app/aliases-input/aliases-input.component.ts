import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-aliases-input',
  templateUrl: './aliases-input.component.html',
  styleUrls: ['./aliases-input.component.css']
})
export class AliasesInputComponent implements OnInit {
  @Input() aliasesForm: FormArray
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get aliases() {
    return this.aliasesForm
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  removeAlias(index:number) {
    this.aliases.removeAt(index);
  }

}
