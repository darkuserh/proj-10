import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer.list.component.html',
  styleUrls: ['./customer.list.component.scss']
})
export class CustomerListComponent {
selectedCustomer:any;
customers:Customer[]=[{ "name"   : "John Smith",
"sku"    : "20223",
"price"  : 23.95,
"address" : "456 Oak Lane",
"city" : "Pretendville",
"state" : "HI",

     
},
{ "name"   : "Alice Brown",
  "sku"    : "54321",
  "price"  : 199.95,
  "address" : "456 Oak Lane",
  "city" : "Pretendville",
  "state" : "HI",
},
{
"name" : "Bob Brown",
               "address" : "456 Oak Lane",
               "sku"    : "54321",
               "price"  : 199.95,
               "city" : "Pretendville",
               "state" : "HI",
           

}]
}