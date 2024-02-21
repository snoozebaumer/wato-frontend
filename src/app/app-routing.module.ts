import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChallengeCreationComponent} from "./challenge-creation/challenge-creation.component";
import {ChallengeDetailComponent} from "./challenge-detail/challenge-detail.component";
import {ShareComponent} from "./share/share.component";

const routes: Routes = [
  { path: 'challenge/:id', component: ChallengeDetailComponent},
  { path: 'share/:id', component: ShareComponent},
  {path: '', component: ChallengeCreationComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
