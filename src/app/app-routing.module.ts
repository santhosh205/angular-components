import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DragNDropComponent } from './modules/drag-n-drop/drag-n-drop.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drag-n-drop', component: DragNDropComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
