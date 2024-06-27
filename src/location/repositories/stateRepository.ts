import { State } from '../entities/state.entity';

export abstract class StateRepository {
  abstract createState(stateData: State): Promise<number>;
}
