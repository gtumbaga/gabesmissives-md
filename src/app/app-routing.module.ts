import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFrontComponent } from './page-front/page-front.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';


const routes: Routes = [
  {
    path: '',
    component: PageFrontComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  },
  {
    path: 'contact',
    component: PageContactComponent
  },
  {
    path: 'blogpost/:slug',
    component: BlogpostComponent
  },
  {
    path: 'blogposts',
    component: BlogpostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
