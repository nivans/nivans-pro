import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePortfolioComponent } from './pages/page-portfolio/page-portfolio.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'portfolio',
    component: PagePortfolioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PagePortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
