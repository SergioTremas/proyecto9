import { Routes, RouterModule } from '@angular/router';
import { HomepublicComponent } from './components/homepublic/homepublic.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';

import { ForLetterComponent } from './components/for-letter/for-letter.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { NewLoginComponent } from './components/new-login/new-login.component';
import { AuthGuard } from './guard/auth.guard';



const APP_ROUTES: Routes = [

  {path : 'home', component: HomepublicComponent },
  {path : 'about', component: AboutComponent },
  {path : 'products', component: ProductsComponent },
  {path : 'user',
  component: UserComponent,
  canActivate: [AuthGuard]
},

  {path : 'byletter/:leter', component: ForLetterComponent },
  {path : 'singleProduct/:id', component: SingleProductComponent },
  {path : 'login', component: LoginComponent },
  {path : 'newLogin', component: NewLoginComponent },



  {path : '**', pathMatch: 'full', redirectTo: 'home'}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
