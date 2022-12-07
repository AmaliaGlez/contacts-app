export interface ContactLog {
  contactId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  updatedAt: Date;
}

export interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  logs?: ContactLog[];
}
