import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomepublicComponent } from './components/homepublic/homepublic.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ForLetterComponent } from './components/for-letter/for-letter.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ValuationsComponent } from './components/valuations/valuations.component';
import { IntroValuationComponent } from './components/intro-valuation/intro-valuation.component';
import { LoginComponent } from './components/login/login.component';
import { NewLoginComponent } from './components/new-login/new-login.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CookieLoginComponent } from './cookie/cookie-login/cookie-login.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                HomepublicComponent,
                ProductsComponent,
                AboutComponent,
                UserComponent,
                ForLetterComponent,
                SingleProductComponent,
                ValuationsComponent,
                IntroValuationComponent,
                LoginComponent,
                NewLoginComponent,
                CookieLoginComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                APP_ROUTING,
                FormsModule,
                HttpClientModule
            ],
            providers: [
                ProductsService,
                CookieService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map