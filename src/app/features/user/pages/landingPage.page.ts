import { Component } from '@angular/core';
import currentJobsData from '../data';
@Component({
  selector: 'app-landingPage',
  templateUrl: './landingPage.page.html',
  styleUrls: ['./landingPage.page.scss'],
})
export class LandingPage {
  public currentJobs = currentJobsData;

  constructor() {}
}
