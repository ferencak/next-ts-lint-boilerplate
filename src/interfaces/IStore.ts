export interface IApplication {
  name: string;
}

export interface IGlobalStore {
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
