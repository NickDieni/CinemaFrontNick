import { Component } from '@angular/core';
import { Address } from '../../models/address';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericService } from '../../service/generic.service';

@Component({
  selector: 'app-address',
  imports: [],
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
          console.log('Success to Create Postalcode', response);
          this.addressList.push(response);
          this.AddressForm.reset();
        },
        (error) => {
          console.log('Failed to Create Postalcode', error);
        }
      );
    } else {
      alert('Please Fill out the form or else...');
    }
  }
  constructor(
    private service: GenericService<Address>,
  ) {}
}
