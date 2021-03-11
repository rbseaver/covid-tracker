import { Type } from "./Type";

export interface Anomaly {
  date: Date;
  type: Type;
  original_observation: number;
}
