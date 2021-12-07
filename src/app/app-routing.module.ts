import {InjectionToken, NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {ResultComponent} from './components/result/result.component';
import {FullLayoutComponent} from './layout/full-layout/full-layout.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main_layout',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'main_layout',
        component: MainLayoutComponent
      },
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main_layout'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [{
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {

        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      }
    }, {
      provide: deactivateGuard,
      useValue: () => {
        return false;
      }
    }],
})

export class AppRoutingModule {}
