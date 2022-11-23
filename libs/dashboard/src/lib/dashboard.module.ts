import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
