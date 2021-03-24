import { Actuals } from './Actuals';
import { RiskLevels } from "./RiskLevels";
import { Metrics } from "./Metrics";
import { Level } from "./Level";
import { Country } from "./Country";
import { Annotation } from "./Annotation";

export interface Result {
  fips: string;
  country: Country;
  state: string;
  county: null;
  level: Level;
  lat: null;
  locationId: string;
  long: null;
  population: number;
  metrics: Metrics;
  riskLevels: RiskLevels;
  actuals: Actuals;
  annotations: { [key: string]: Annotation | null; };
  lastUpdatedDate: Date;
  url: string;
}