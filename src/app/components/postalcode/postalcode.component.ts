import { Component } from '@angular/core';
import { PostalcodeService } from '../../service/postalcode.service';
import { PostalCode } from '../../models/postalcode';
import { GenericService } from '../../service/generic.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-postalcode',
  imports: [ReactiveFormsModule],
  templateUrl: './postalcode.component.html',
  styleUrl: './postalcode.component.css',
})
export class PostalcodeComponent {
  postalList: PostalCode[] = [];
  ComponentNameValue: string = 'PostalCodes';

  postalForm: FormGroup = new FormGroup({
    postalCodeId: new FormControl(0, [Validators.required]),
    postalName: new FormControl('', [Validators.required]),
  });

  GetPostalbyid(PostalId: number) {
    this.service
      .genericGetById(PostalId, this.ComponentNameValue)
      .subscribe((data) => {
        console.log('Success to Get ', this.ComponentNameValue, ' By Id', data);
        return (this.postalList = [data]);
      });
  }

  deletePostalCode(PostalCodeId: number) {
    console.log('Deleting ', PostalCodeId);
    this.service.genericDelete(PostalCodeId, this.ComponentNameValue).subscribe((data) => {
        console.log(
          'Success to Delete ',
          this.ComponentNameValue,
          ' By Id ',
          data
        );
      });

    this.postalList = [];
    console.log(this.postalList);
  }
  onSubmit(): void {
    console.log(this.postalForm);
    console.log(this.postalForm.valid);
    console.log(this.postalForm.controls);

    if (this.postalForm.valid) {
      const formData = this.postalForm.value;
      this.service.genericCreate(formData, this.ComponentNameValue).subscribe(
        (response) => {
          console.log('Success to Create Postalcode', response);
          this.postalList.push(response);
          this.postalForm.reset();
        },
        (error) => {
          console.log('Failed to Create Postalcode', error);
        }
      );
    } else {
      alert('Please Fill out the form or else...');
    }
  }

  ngOnInit() {
    this.service.genericGetAll('PostalCodes').subscribe((data) => {
      console.log('Success To Get PostalCodes', data);
      this.postalList = Array.isArray(data) ? data : [data];
    });
  }

  constructor(
    private service2: PostalcodeService,
    private service: GenericService<PostalCode>
  ) {}
}
