import {PageNotFoundComponent} from '../page-not-found/page-not-found.component'

export const passingDataConfig=[
    {
        path:'**',
        component:PageNotFoundComponent,
        pathMatch: 'full'
    }
]