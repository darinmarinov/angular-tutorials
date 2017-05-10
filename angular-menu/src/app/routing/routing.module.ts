import {passingDataConfig} from '../page-not-found/page-not-found-routet-config'
import { allRouter } from '../all-tutorials/all-router-config';
import { homeRouterConfig } from '../home-component/home-router-config';
import { RouterModule, Routes } from '@angular/router';

export const routes:Routes=[
  ...homeRouterConfig,
  ...allRouter,
  {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
  },
  ...passingDataConfig
]

export const routing=RouterModule.forRoot(routes);
