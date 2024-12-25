import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPositiveDecimal]',
})
export class PositiveDecimalDirective {
  private readonly regex = new RegExp(/^\d*\.?\d{0,2}$/); // Allow numbers with up to 2 decimal places

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement as HTMLInputElement;
    const value = input.value;

    // Allow only positive decimal numbers
    if (!this.regex.test(value)) {
      input.value = value.substring(0, value.length - 1); // Revert to the previous valid value
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    const char = String.fromCharCode(event.which);

    // Allow digits, period, and prevent multiple periods
    if (
      !/[0-9.]/.test(char) ||
      (char === '.' && this.el.nativeElement.value.includes('.'))
    ) {
      event.preventDefault();
    }
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const input = this.el.nativeElement as HTMLInputElement;
    const value = input.value;

    // Remove trailing decimal point or invalid characters on blur
    if (value.endsWith('.') || isNaN(parseFloat(value))) {
      input.value = value.slice(0, -1);
    }
  }
}
