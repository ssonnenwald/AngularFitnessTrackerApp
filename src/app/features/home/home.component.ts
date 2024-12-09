import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CustomerDataService } from '../../core/services/customer-data.service';
import { CustomerDto } from '../../core/models/customer-dto';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CustomerDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);
  private customerDataService: CustomerDataService =
    inject(CustomerDataService);

  public data: WritableSignal<CustomerDto[]> = signal<Array<CustomerDto>>([]);
  public selectedCustomerId: WritableSignal<string | undefined> = signal<
    string | undefined
  >(undefined);

  public constructor() {}

  public ngOnInit(): void {
    this.customerDataService
      .getCustomers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: Array<CustomerDto>) => {
        // Sort the array by first name then by last name
        data = [...data].sort((a, b) => {
          // First, compare by firstname
          if (a.firstName < b.firstName) return -1;
          if (a.firstName > b.firstName) return 1;

          // If firstname is the same, compare by lastname
          if (a.lastName < b.lastName) return -1;
          if (a.lastName > b.lastName) return 1;

          return 0;
        });

        this.data = signal(data);

        console.log(data);
      });
  }

  public onSelectedCustomer(ele: EventTarget | null): void {
    const customerId: string = (ele as HTMLSelectElement).value;

    this.selectedCustomerId.set(customerId);

    const customerData: CustomerDto | undefined = this.data().find(
      (customer: CustomerDto) => customer.id === customerId
    );

    console.log('');
    console.log(
      `Selected Customer:  ${customerData?.firstName} ${customerData?.lastName} (${customerId})`
    );
  }
}
