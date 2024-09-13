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
	},

	{
		path: 'specificity',
		// component: SpecificityComponent
		loadComponent: () => import('./specificity/specificity.component').then((c) => c.SpecificityComponent)
	},
	{
		path: 'media',
		// component: MediaComponent
		loadComponent: () => import('./media/media.component').then((c) => c.MediaComponent)
	},
	{
		path: 'gradient',
		// component: GradientComponent
		loadComponent: () => import('./gradient/gradient.component').then((c) => c.GradientComponent)
	},
	{
		path: 'data-attribute',
		// component: DataAttributeComponent
		loadComponent: () => import('./data-attribute/data-attribute.component').then((c) => c.DataAttributeComponent)
	},
	{
		path: 'meta-charset',
		// component: MetaCharsetComponent
		loadComponent: () => import('./meta-charset/meta-charset.component').then((c) => c.MetaCharsetComponent)
	},

];
