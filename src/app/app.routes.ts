import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponetInputExampleComponent } from './components/componet-input-example/componet-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';

export const routes: Routes = [
  {path: 'for-directive-example', component: ForDirectiveExampleComponent},
  {path: 'component-input-example', component: ComponetInputExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  {path: 'event-bind-example', component: EventBindExampleComponent},
  {path: 'component-output-example', component: ComponentOutputExampleComponent},
  {path: '', component: WelcomeComponent},
];
