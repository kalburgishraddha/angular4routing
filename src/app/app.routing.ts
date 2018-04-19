import { Routes,RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full'},
    { path:'weather', component: WeatherComponent },
    { path:'currency', component:CurrencyComponent}
]
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);