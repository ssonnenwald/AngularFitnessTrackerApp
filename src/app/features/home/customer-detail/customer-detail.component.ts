import {
  Component,
  inject,
  input,
  InputSignal,
  linkedSignal,
  ResourceRef,
  WritableSignal,
} from '@angular/core';
import { CustomerDataService } from '../../../core/services/customer-data.service';
import { FormsModule } from '@angular/forms';
import { CustomerDto } from '../../../core/models/customer-dto';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-detail',
  imports: [FormsModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
})
export class CustomerDetailComponent {
  public id: InputSignal<string> = input<string>('');

  private customerDataService: CustomerDataService =
    inject(CustomerDataService);

  private customerResource: ResourceRef<CustomerDto> = rxResource({
    request: this.id,
    loader: () => this.customerDataService.getCustomer(this.id()),
  });

  public customer: WritableSignal<CustomerDto | undefined> = linkedSignal({
    source: this.customerResource.value,
    computation: () => this.customerResource.value(),
  });

  public constructor() {}
}
