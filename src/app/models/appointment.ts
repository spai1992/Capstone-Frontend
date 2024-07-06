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
  userFirstName?: string; // Campo già presente
  userLastName?: string; // Campo già presente
  lawyerFirstName?: string; // Nuovo campo
  lawyerLastName?: string; // Nuovo campo
}
