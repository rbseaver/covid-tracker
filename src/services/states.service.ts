import { Result } from '../models/Result';

export default class StatesService {
  queryByState = (state: string): Result => ({ state: state } as Result);
}
