import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//For routing
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { Contact } from './contact/contact';
import { MovieDetails } from './movie-details/movie-details';
import { Customers } from './customers/customers';
import { Customerdetails } from './customerdetails/customerdetails';

//paths---component---when to load that component
const routes: Routes = [
  {path:'',component:Home},
  {path:'movies',component:Movies},
  {path:'contact',component:Contact},
  {path:'customers',component:Customers},
  {path:'customerdetails',component:Customerdetails},
  {path:'movies/:id',component:MovieDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
