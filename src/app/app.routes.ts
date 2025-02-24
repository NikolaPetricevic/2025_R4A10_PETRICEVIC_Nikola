import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VoyagePageComponent } from './voyage-page/voyage-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: '',
    },
    {
        component: VoyagePageComponent,
        path: 'voyage/:id',
    }
];
