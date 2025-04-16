import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './pages/form/page1.component';
import { Page2Component } from './pages/td-form/page2.component';
import { RouterModule, Routes } from '@angular/router';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from './core/services/data.service';
import { ItalicDirective } from './core/directive/italic.directive';
import { RecursiveAstVisitor } from '@angular/compiler';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [confirmInGuard] },
];
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ItalicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
