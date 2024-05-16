
export async function GET() {
  try {
    const resp = await fetch("https://dummyjson.com/user");
    const data: IResp = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

interface ICryptoDetail {
  coin?: string;
  wallet?: string;
  network?: string;
}

interface ICompanyDetailAdrCoor {
  lat?: string;
  lng?: string;
}

interface ICompanyDetailAdr {
  address?: string;
  city?: string;
  coordinates?: ICompanyDetailAdrCoor;
  postalCode?: string;
  state?: string;
}

interface IUserCompany {
  address?: ICompanyDetailAdr;
  department?: string;
  name?: string;
  title?: string;
}

interface IBankDetail {
  cardExpire?: string;
  cardNumber?: string;
  cardType?: string;
  currency?: string;
  iban?: string;
}

interface IAddressCoor {
  lat?: string;
  lng?: string;
}

interface IUserAddressDetail {
  address?: string;
  city?: string;
  coordinates?: IAddressCoor;
  postalCode?: string;
  state?: string;
}

interface IUserHairStyle {
  color?: string;
  type?: string;
}
export interface IUserDetail {
  id?: number;
  firstName?: string;
  lastName?: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: IUserHairStyle;
  domain?: string;
  ip?: string;
  address?: IUserAddressDetail;
  macAddress?: string;
  university?: string;
  bank?: IBankDetail;
  company: IUserCompany;
  ein?: string;
  ssn?: string;
  userAgent?: string;
  crypto?: ICryptoDetail;
}

export interface IResp {
  users: IUserDetail[];
}
