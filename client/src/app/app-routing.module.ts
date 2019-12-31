import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsComponent } from './components/components.component';
import { WorkSampleComponent } from './work-sample/work-sample.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'work/:id', component: WorkSampleComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'components', component: ComponentsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
