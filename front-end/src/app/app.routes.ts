import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell.component';
import { LoginPageComponent } from './features/auth/login-page.component';
import { DashboardPageComponent } from './features/dashboard/dashboard-page.component';
import { ProductsPageComponent } from './features/products/products-page.component';
import { StockMovementsPageComponent } from './features/stock-movements/stock-movements-page.component';
import { AlertsPageComponent } from './features/alerts/alerts-page.component';
import { CsvImportPageComponent } from './features/csv-import/csv-import-page.component';
import { AuditLogsPageComponent } from './features/audit-logs/audit-logs-page.component';

export const routes: Routes = [
	{
		path: 'login',
		component: LoginPageComponent,
	},
	{
		path: '',
		component: ShellComponent,
		children: [
			{ path: 'dashboard', component: DashboardPageComponent },
			{ path: 'products', component: ProductsPageComponent },
			{ path: 'stock-movements', component: StockMovementsPageComponent },
			{ path: 'alerts', component: AlertsPageComponent },
			{ path: 'csv-import', component: CsvImportPageComponent },
			{ path: 'audit-logs', component: AuditLogsPageComponent },
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
		],
	},
	{ path: '**', redirectTo: '/dashboard' },
];
