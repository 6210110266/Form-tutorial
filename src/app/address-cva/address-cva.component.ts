import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-cva',
  templateUrl: './address-cva.component.html',
  styleUrls: ['./address-cva.component.css'],
  providers: [{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>AddressCvaComponent),
    multi:true,
  },
{
  provide:NG_VALIDATORS,
    useExisting:forwardRef(()=>AddressCvaComponent),
    multi:true,
}],
})
export class AddressCvaComponent implements OnInit ,ControlValueAccessor,Validator{
  addressForm :FormGroup
  constructor(private fb: FormBuilder) {
    this.addressForm= this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['',Validators.required]
    });
   }

  validate(control: AbstractControl): ValidationErrors {
    return this.addressForm.invalid ? {required : true} : null;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
  }

  onTouched: () => void = () =>{}; 

  writeValue(obj: any): void {
    this.addressForm.patchValue(obj)
  }
  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
