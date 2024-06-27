export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  specialization?: string;
  description?: string;
  address?: string;
  phone?: string;
  profilePicture?: string;
  roles: string[];
}
