import { SourceElement } from "./SourceElement";
import { Anomaly } from "./Anomaly";

export interface Annotation {
  sources: SourceElement[];
  anomalies: Anomaly[];
}
