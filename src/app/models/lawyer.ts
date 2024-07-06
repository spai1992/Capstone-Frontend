export interface Lawyer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  specialization: string;
  description: string;
  city: string;
  address: string;
  phone: string;
  profilePicture: string | null; // Consenti null
  roles: string[];
}
