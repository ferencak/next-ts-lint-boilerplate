import { IUser, IUserAuthorization } from './IUser';

export interface IApplication {
  name: string;
}

export interface IGlobalStore {
  user: IUser;
  authorization: IUserAuthorization;
  application: IApplication;
}

export interface IStore {
  store: IGlobalStore;
  setStore: (_store: IGlobalStore) => void;
  resetStore: () => void;
}

export interface IStoreProviderProps {
  children: React.ReactNode;
}
