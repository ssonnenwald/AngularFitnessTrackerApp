import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDateFormatter]',
})
export class DateFormatterDirective {
  private readonly maxLength = 10; // MM/DD/YYYY

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement as HTMLInputElement;
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }

    value = value.slice(0, this.maxLength); // Limit to MM/DD/YYYY
    input.value = value;
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const input = this.el.nativeElement as HTMLInputElement;
    if (input.value.length === this.maxLength) {
      const [month, day, year] = input.value.split('/').map(Number);

      if (
        month < 1 ||
        month > 12 ||
        day < 1 ||
        day > 31 ||
        year < 1900 ||
        year > new Date().getFullYear()
      ) {
        input.value = ''; // Clear invalid date
      }
    }
  }
}
