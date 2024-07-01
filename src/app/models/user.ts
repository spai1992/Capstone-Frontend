export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  specialization?: string;
  description?: string;
  city?: string;
  address?: string;
  phone?: string;
  profilePicture?: string;
  roles: string[];
}
