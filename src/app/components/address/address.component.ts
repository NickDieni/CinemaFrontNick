import { Component } from '@angular/core';
import { Address } from '../../models/address';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericService } from '../../service/generic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  addressList: Address[] = [];
  ComponentNameValue: string = 'Address';


  AddressForm: FormGroup = new FormGroup({
    street: new FormControl('', [Validators.required]),
    streetNumber: new FormControl(0, [Validators.required]),
    building: new FormControl(0, [Validators.required]),
    floor: new FormControl(0, [Validators.required]),
    direction: new FormControl('', [Validators.required]),
    postalCodeId: new FormControl(0, [Validators.required])
  });

  onSubmit(): void {
    console.log(this.AddressForm);
    console.log(this.AddressForm.valid);
    console.log(this.AddressForm.controls);

    if (this.AddressForm.valid) {
      const formData = this.AddressForm.value;
      this.service.genericCreate(formData, this.ComponentNameValue).subscribe(
        (response) => {
          console.log('Success to Create Address', response);
          this.addressList.push(response);
          this.AddressForm.reset();
        },
        (error) => {
          console.log('Failed to Create Address', error);
        }
      );
    } else {
      alert('Please Fill out the form or else...');
    }
  }

  deleteAddress(AddressId: number) {
    this.service.genericDelete(AddressId, this.ComponentNameValue);

    this.addressList = this.addressList.filter((address) => address.addressId !== AddressId);
  }
  getAddressWithIdGeneric(AddressId: number) {
    this.service.genericGetById(AddressId, this.ComponentNameValue).subscribe((data) => {
      console.log('Success To Get ', this.ComponentNameValue, ' By Id', data);
      this.addressList = Array.isArray(data) ? data : [data];
    });
  }


  constructor(
    private service: GenericService<Address>,
  ) {}
}
