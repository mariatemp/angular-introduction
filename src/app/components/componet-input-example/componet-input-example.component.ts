import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-componet-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './componet-input-example.component.html',
  styleUrl: './componet-input-example.component.css'
})
export class ComponetInputExampleComponent {
  person0: Person = {
    givenName: 'Maria',
    surName: 'Temponera',
    age: 0x20,
    email: 'mariatemp@aueb.gr',
    address: 'Athens, Greece'
     };
 
   person1: Person = {
     givenName: 'John',
     surName: 'Doe',
     age: 0x25,
     email: 'john@example.com',
     address: 'New York, USA'
   };
}
