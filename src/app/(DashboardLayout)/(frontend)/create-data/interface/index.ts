export interface IAdressDetail {
  [x: string]: string;
}
export interface IHairDetail {
  Black: number;
  Blond: number;
  Chestnut: number;
  Brown: number;
}
export interface IDepartMentDetail {
  male: number;
  female: number;
  ageRange: string;
  hair: IHairDetail;
  addressUser: IAdressDetail;
}
export interface IRespData {
  [x: string]: IDepartMentDetail;
}
