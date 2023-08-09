import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { LandingPage } from './pages/landingPage.page';
import { CardsJobComponent } from './components/cardsJob/cardsJob.component';
import { CardsReviewComponent } from './components/cardsReview/cardsReview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingFooterComponent } from './components/landingFooter/landingFooter.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [
    LandingPage,
    CardsJobComponent,
    CardsReviewComponent,
    LandingFooterComponent,
  ],
  imports: [CommonModule, SharedModule, UserRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
