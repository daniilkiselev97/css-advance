import { Routes } from '@angular/router';
import { PositionComponent } from './position/position.component';
import { ContextComponent } from './context/context.component';

export const routes: Routes = [
	{
		path: 'position',
		// component: PositionComponent
		loadComponent: () => import('./position/position.component').then((c) => c.PositionComponent)
	},

	{
		path: 'context',
		// component: ContextComponent
		loadComponent: () => import('./context/context.component').then((c) => c.ContextComponent)
	}
];
