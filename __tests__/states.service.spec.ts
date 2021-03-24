import { Result } from '../src/models/Result';
import StatesService from '../src/services/states.service';

describe('when querying state data', () => {
  test('it should initialize the service without error', () => {
    const action = () => new StatesService();

    expect(action).not.toThrowError();
  });

  test('it should query by state', () => {
    const service = new StatesService();

    const result: Result = service.queryByState('TX');

    expect(result.state).toBe('TX');
  });
});