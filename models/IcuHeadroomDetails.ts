import { CurrentIcuCovidMethod } from "./CurrentIcuCovidMethod";


export interface IcuHeadroomDetails {
  currentIcuCovid: number;
  currentIcuCovidMethod: CurrentIcuCovidMethod;
  currentIcuNonCovid: number;
  currentIcuNonCovidMethod: CurrentIcuCovidMethod;
}
