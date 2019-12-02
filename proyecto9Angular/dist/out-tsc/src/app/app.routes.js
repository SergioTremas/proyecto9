import { RouterModule } from '@angular/router';
import { HomepublicComponent } from './components/homepublic/homepublic.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';
import { ForLetterComponent } from './components/for-letter/for-letter.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { NewLoginComponent } from './components/new-login/new-login.component';
var APP_ROUTES = [
    { path: 'home', component: HomepublicComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'user', component: UserComponent },
    { path: 'byletter/:leter', component: ForLetterComponent },
    { path: 'singleProduct/:id', component: SingleProductComponent },
    { path: 'login', component: LoginComponent },
    { path: 'newLogin', component: NewLoginComponent }
    //{path : '**', pathMatch: 'full', redirectTo: 'home'}
];
export var APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
//# sourceMappingURL=app.routes.js.map