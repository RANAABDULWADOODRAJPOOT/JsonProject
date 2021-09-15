import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ResourcesComponent } from './resources/resources.component';
import { WhoweareComponent } from './whoweare/whoweare.component';





const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'HOME',
    component: HomeComponent,
  },
  {
    path: 'WHOWEARE',
    component: WhoweareComponent,
  },
  {
    path: 'PRODUCTS',
    component: ProductsComponent,
  },
  {
    path: 'RESOURCES',
    component: ResourcesComponent,
  },
  {
    path: 'LOGIN',
    component: LoginComponent,
  },
  {
    path: 'CREATEUSER',
    component: CreateComponent,
  },
  {
    path: 'HELP&SUPPORT',
    component: HelpComponent,
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
