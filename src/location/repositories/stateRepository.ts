import { State } from '../entities/state.entity';

export abstract class StateRepository {
  abstract createState(stateData: State): Promise<number>;
  abstract countStates(): Promise<number>;
  abstract getAllStates(): Promise<State[]>;
  abstract createDefaultStates(statesList: State[]): Promise<void>;
  abstract findStatesWithBarbershop(): Promise<State[]>;
  abstract findStateById(id: number): Promise<State>;
}
