import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawyerService } from '../lawyer.service';
import { LawyerResponse } from '../../models/lawyer-response';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.scss'],
})
export class LawyersComponent implements OnInit {
  searchKeyword: string = '';
  searchCity: string = '';
  lawyers: LawyerResponse[] = [];

  constructor(private lawyerService: LawyerService, private router: Router) {}

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

  viewProfile(lawyerId: number): void {
    this.router.navigate(['/lawyer/profile', lawyerId]);
  }
}
