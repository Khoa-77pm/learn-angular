import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: "[appPhoneNumberFormat]",
})
export class PhoneNumberFormatDirective {
  constructor(private ef: ElementRef) {}
  
  @HostListener("blur") onBlur() {
    let value : string = this.ef.nativeElement.value;
    let formatedValue = value.substring(0,3) + "-" + value.substring(4,value.length);
    this.ef.nativeElement.value = formatedValue;
  }
  
}
