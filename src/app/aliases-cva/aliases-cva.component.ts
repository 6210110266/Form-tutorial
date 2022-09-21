import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-aliases-cva',
  templateUrl: './aliases-cva.component.html',
  styleUrls: ['./aliases-cva.component.css'],
  providers: [{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>AliasesCvaComponent),
    multi:true,
  }]
})
export class AliasesCvaComponent implements OnInit,ControlValueAccessor {
  aliasesForm :FormArray
  constructor(private fb: FormBuilder) {
    this.aliasesForm = this.fb.array([
      this.fb.control(''),
      this.fb.control('')
    ])
   }
   
   ngOnInit(): void {
  }

  onTouched: () => void = () =>{}; 

  writeValue(obj: any): void {
    console.log(obj)
    let a
    a = obj.length - this.aliasesForm.length
    console.log(a)
    if(a < 0){
      for(var i=0;i< Math.abs(a);i++){
        this.aliasesForm.removeAt(0)
      }
    }
    else if(a > 0 ){
      for(var i=0;i< a;i++){
        let b = this.fb.control('')
        this.aliasesForm.push(b)
      }
    }
    console.log(this.aliasesForm)
    for(var i=0;i<Math.abs(a);i++){
      this.aliasesForm.controls[i].patchValue(obj[i])
    }
  }
  registerOnChange(fn: any): void {
    this.aliasesForm.valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  addAlias() {
    this.aliasesForm.push(this.fb.control(''));
  }

  removeAlias(index:number) {
    this.aliasesForm.removeAt(index);
  }

}
