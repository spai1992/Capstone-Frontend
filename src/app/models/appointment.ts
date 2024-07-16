export interface Appointment {
  id: number;
  appointmentDate: string;
  confirmationToken: string;
  confirmed: boolean;
  description: string;
  endDate: string;
  lawyerId: number;
  userId: number;
  user?: {
    firstName: string;
    lastName: string;
  };
  userFirstName?: string;
  userLastName?: string;
  lawyerFirstName?: string;
  lawyerLastName?: string;
}
