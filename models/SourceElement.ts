import { SourceEnum } from "./SourceEnum";
import { Name } from "./Name";

export interface SourceElement {
  type: SourceEnum;
  url: null | string;
  name: Name | null;
}
