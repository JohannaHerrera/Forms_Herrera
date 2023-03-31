import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastNameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  cityControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  countryControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  addressControl = new FormControl('', [Validators.required, Validators.minLength(4)]);

  registerForm: FormGroup;
  

  constructor(public formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      city: this.cityControl,
      country: this.countryControl,
      email: this.emailControl,
      password: this.passwordControl,
      address: this.addressControl
    });
  }

  get FirstNameIsValid(): boolean{
    return (this.firstNameControl.invalid && this.firstNameControl.touched);
  }

  get FirstNameRequired(): boolean{
    return (this.firstNameControl.hasError('required'));
  }

  get LastNameIsValid(): boolean{
    return (this.lastNameControl.invalid && this.lastNameControl.touched);
  }

  get LastNameRequired(): boolean{
    return (this.lastNameControl.hasError('required'));
  }

  get CountryIsValid(): boolean{
    return (this.countryControl.invalid && this.countryControl.touched);
  }

  get CountryRequired(): boolean{
    return (this.countryControl.hasError('required'));
  }

  get CityIsValid(): boolean{
    return (this.cityControl.invalid && this.cityControl.touched);
  }

  get CityRequired(): boolean{
    return (this.cityControl.hasError('required'));
  }

  get EmailIsValid(): boolean{
    return (this.emailControl.invalid && this.emailControl.touched);
  }

  get EmailRequired(): boolean{
    return (this.emailControl.hasError('required'));
  }

  get PasswordIsValid(): boolean{
    return (this.passwordControl.invalid && this.passwordControl.touched);
  }

  get PasswordRequired(): boolean{
    return (this.passwordControl.hasError('required'));
  }

  get AddressIsValid(): boolean{
    return (this.addressControl.invalid && this.addressControl.touched);
  }

  get AddressRequired(): boolean{
    return (this.addressControl.hasError('required'));
  }

  onSubmit(): void{
    if(this.registerForm.valid)
    {
      alert("OK. ¡Gracias por registrarte!");
    }
    else
    {
      alert("ERROR. Por favor revisa los datos del formulario.");
    }
  }
}