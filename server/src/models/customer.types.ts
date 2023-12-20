export type CustomerParams = {
  customerId: number;
  googleUserId: string ;
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
  userProfilePicture: string;
};

export type AddressParams = {
  phone: string;
  address: string;
  city: string;
  zipCode: string;
};
