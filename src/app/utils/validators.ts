import { AbstractControl } from '@angular/forms';

export class MyValidators {

  public static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);

    if (value > 10000) {
      return {
        priceInvalid: true
      };
    }
    return null;
  }
}
