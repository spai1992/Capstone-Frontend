import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FaqsComponent],
  imports: [CommonModule, FaqsRoutingModule, NgbAccordionModule],
})
export class FaqsModule {}
