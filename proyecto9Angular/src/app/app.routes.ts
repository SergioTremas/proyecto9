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
import { ValuesUserComponent } from './components/values-user/values-user.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { ModifyValueComponent } from './components/modify-value/modify-value.component';
import { Guard2Guard } from './guard/guard2.guard';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { InsertProductComponent } from './components/insert-product/insert-product.component';
import { ListRevComponent } from './components/list-rev/list-rev.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';



const APP_ROUTES: Routes = [

  {path : 'home', component: HomepublicComponent },
  {path : 'about', component: AboutComponent },
  {path : 'products', component: ProductsComponent },
  {path : 'user',
  component: UserComponent,
  canActivate: [AuthGuard]
},
{path : 'listProducts',
  component: ListProductsComponent,
  canActivate: [Guard2Guard]
},
{path : 'listUsers',
  component: ListUsersComponent,
  canActivate: [Guard2Guard]
},
{path : 'insertProduct',
  component: InsertProductComponent,
  canActivate: [Guard2Guard]
},
{path : 'listRev',
  component: ListRevComponent,
  canActivate: [Guard2Guard]
},
{path : 'updateProduct/:id',
  component: UpdateProductComponent,
  canActivate: [Guard2Guard]
},

  {path : 'byletter/:leter/:category', component: ForLetterComponent },
  {path : 'singleProduct/:id', component: SingleProductComponent },
  {path : 'login', component: LoginComponent },
  {path : 'newLogin', component: NewLoginComponent },
  {path : 'valuesUser/:idUser', component: ValuesUserComponent },
  {path : 'navbar', component: NavbarComponent },
  {path : 'modify/:idUser/:idProduct', component: ModifyValueComponent },





  {path : '**', pathMatch: 'full', redirectTo: 'home'}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
