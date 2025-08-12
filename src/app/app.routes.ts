import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./Components/home/home').then(m => m.HomeComponent) },
  { path: 'manage', loadComponent: () => import('./Components/manage/manage').then(m => m.ManageComponent) },
  { path: 'testbed', loadComponent: () => import('./Components/testbed/testbed').then(m => m.TestBedComponent) },
];
