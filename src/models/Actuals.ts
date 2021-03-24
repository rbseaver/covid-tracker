import { Beds } from "./Beds";


export interface Actuals {
  cases: number;
  deaths: number;
  positiveTests: number;
  negativeTests: number;
  contactTracers: number;
  hospitalBeds: Beds;
  icuBeds: Beds;
  newCases: number;
  newDeaths: number;
  vaccinesDistributed: number | null;
  vaccinationsInitiated: number | null;
  vaccinationsCompleted: number | null;
}
