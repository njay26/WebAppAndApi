import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components so they can be referenced in routes
import { CreateStudentComponent } from './student/create/create-student.component';
import { ListStudentComponent } from './student/list/list-student.component';
// The last route is the empty path route. This specifies
// the route to redirect to if the client side path is empty.
const appRoutes: Routes = [
  { path: 'list', component: ListStudentComponent },
  { path: 'create', component: CreateStudentComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

// Pass the configured routes to the forRoot() method
// to let the angular router know about our routes
// Export the imported RouterModule so router directives
// are available to the module that imports this AppRoutingModule
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
