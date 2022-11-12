import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstObsComponent } from './first-obs/first-obs.component';
import { JoinforkComponent } from './joinfork/joinfork.component';
import { MapoperatorComponent } from './mapoperator/mapoperator.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'mapop', component:MapoperatorComponent},
  {path:'obes', component:FirstObsComponent},
  {path:'post', component:PostComponent},
  {path:'fork', component:JoinforkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
