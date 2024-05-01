export interface Address {
  street: string;
  city: string;
  number: string;
  zipcode: string;
}

export interface PhonenUmber {
  number: string;
  type: string;
}

export interface Customer {
  givenName: string;
  surName: string;
  email: string;
  afm: string;
  phoneNumber: PhonenUmber[];
  address: Address;
}