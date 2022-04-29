import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { DashdoardComponent } from './component/dashdoard/dashdoard.component';
import { EditIocComponent } from './component/edit-ioc/edit-ioc.component';

const routes: Routes = [
  {path:'Dashboard', component: DashdoardComponent},
  {path:'addIoc',component: AddUserComponent},
  {path:'editIoc/:id',component:EditIocComponent},
  {path:'**',redirectTo:'Dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
