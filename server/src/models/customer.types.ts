export type CustomerParams = {
  customerId: number;
  googleUserID: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
};


export type UserParams = {
  userId: number;
  googleUserId:  string;
  firstName: string;
  lastName: string;
  email: string;
};
