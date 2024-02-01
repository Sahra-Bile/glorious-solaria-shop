
export type UserParams = {
  userId: number;
  googleUserId:  string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  userProfilePicture: string;
  phone?: string;
  address?: string;
  city?: string;
  zipCode?: string;
};

export type AddressParams = {
  phone: number;
  address: string;
  city: string;
  zipCode: number;
};
