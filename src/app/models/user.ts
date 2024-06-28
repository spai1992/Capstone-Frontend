export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  specialization?: string;
  description?: string;
  city?: string; // Aggiungi questa linea se la città è necessaria per l'utente
  address?: string;
  phone?: string;
  profilePicture?: string;
  roles: string[]; // Cambia da Set<string> a string[]
}
