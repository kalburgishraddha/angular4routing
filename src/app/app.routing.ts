import { Routes,RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path:'login', component: LoginComponent },
    { path:'weather', component: WeatherComponent },
    { path:'currency', component:CurrencyComponent}
]
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);