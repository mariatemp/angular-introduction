import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Maria';

  person0 = {
   givenName: 'Maria',
   surName: 'Temponera',
   age: 0x20,
   email: 'mariatemp@aueb.gr',
   address: 'Athens, Greece'
    };

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA'
  };
}
