export interface LawyerRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  specialization: string;
  description: string;
  city: string;
  address: string;
  phone: string;
  profilePicture: string;
  roles: string[];
  role: string; // Aggiungi questo campo
}
