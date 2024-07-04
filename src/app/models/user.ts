export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  roles: string[];
  profilePicture?: string; // Campo opzionale per l'immagine del profilo
}
