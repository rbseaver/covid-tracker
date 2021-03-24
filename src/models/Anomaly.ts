import { AnomalyType } from "./AnomalyType";

export interface Anomaly {
  date: Date;
  type: AnomalyType;
  original_observation: number;
}
