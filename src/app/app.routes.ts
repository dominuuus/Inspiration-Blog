import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path:'article/:url',
        component: ArticleComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), AppComponent],
    exports: [RouterModule]
  })

export class AppRoutingModule { }