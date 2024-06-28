import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../lawyer/lawyer.service';
import { LawyerResponse } from '../models/lawyer-response';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  searchKeyword: string = '';
  searchCity: string = '';
  lawyers: LawyerResponse[] = [];

  constructor(private lawyerService: LawyerService) {}

  ngOnInit(): void {
    this.searchLawyers();
  }

  searchLawyers(): void {
    this.lawyerService
      .searchLawyers(this.searchKeyword, this.searchCity)
      .subscribe({
        next: (lawyers: LawyerResponse[]) => {
          this.lawyers = lawyers;
        },
        error: (err) => {
          console.error('Failed to load lawyers', err);
        },
      });
  }
}
