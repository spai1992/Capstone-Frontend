import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LawyerService } from '../lawyer.service';
import { Lawyer } from '../../models/lawyer';
import { AuthService } from '../../auth/authservice.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lawyer-details',
  templateUrl: './lawyer-details.component.html',
  styleUrls: ['./lawyer-details.component.scss'],
})
export class LawyerDetailsComponent implements OnInit {
  lawyer: Lawyer | null = null;
  showModal: boolean = false;
  closeResult: string = '';

  constructor(
    private route: ActivatedRoute,
    private lawyerService: LawyerService,
    public authService: AuthService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const lawyerId = this.route.snapshot.paramMap.get('id');
    if (lawyerId) {
      this.lawyerService.getLawyerById(+lawyerId).subscribe({
        next: (lawyer) => (this.lawyer = lawyer),
        error: (err) => console.error('Failed to load lawyer details', err),
      });
    }
  }

  openAppointmentModal(content: TemplateRef<any>): void {
    console.log('Opening appointment modal');
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.showModal = true;
          console.log('showModal:', this.showModal);
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.showModal = false;
          console.log('showModal:', this.showModal);
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
