import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VoyagePageComponent } from './voyage-page/voyage-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: '',
    },
    {
        component: VoyagePageComponent,
        path: 'voyage/:id',
    },
    {
        component: NotFoundPageComponent,
        path: '404',
    }
];
