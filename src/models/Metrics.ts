import { TestPositivityRatioDetails } from "./TestPositivityRatioDetails";
import { IcuHeadroomDetails } from "./IcuHeadroomDetails";


export interface Metrics {
  testPositivityRatio: number | null;
  testPositivityRatioDetails: TestPositivityRatioDetails;
  caseDensity: number;
  contactTracerCapacityRatio: number | null;
  infectionRate: number | null;
  infectionRateCI90: number | null;
  icuHeadroomRatio: number | null;
  icuHeadroomDetails: IcuHeadroomDetails | null;
  icuCapacityRatio: number | null;
  vaccinationsInitiatedRatio: number | null;
  vaccinationsCompletedRatio: number | null;
}
