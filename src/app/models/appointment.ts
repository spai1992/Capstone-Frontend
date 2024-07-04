// src/app/models/appointment.ts
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
  }; // Aggiungi questa parte per includere le informazioni dell'utente
}
