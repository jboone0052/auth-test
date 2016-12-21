import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form.component';

import { AuthGuard } from './auth/authguard.service';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard] },
    { path: 'products', component: ProductComponent },
    { path: 'addproduct', component: ProductFormComponent}
];

export const routing = RouterModule.forRoot(routes);
