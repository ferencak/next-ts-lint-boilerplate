import { FC, createContext, useState } from 'react';

import { IGlobalStore, IStore, IStoreProviderProps } from 'interfaces/IStore';

export const StoreDefaultValues: IStore = {
  store: {
    user: {
      id: '',
      username: '',
      email: '',
      acceptPrivacyPolicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      isMember: false,
      memberSince: new Date(),
      role: '',
    },
    authorization: {
      accessToken: '',
      refreshToken: '',
      isAuthorized: false,
    },
    application: {
      name: 'NextJS Starter',
    },
  },
  setStore: (_store: IGlobalStore) => null,
  resetStore: () => null,
};

export const StoreContext = createContext<IStore>(StoreDefaultValues);

export const StoreProvider: FC<IStoreProviderProps> = ({ children }): JSX.Element => {
  const [store, setStoreState] = useState<IGlobalStore>(StoreDefaultValues.store);

  const setStore = (_store: IGlobalStore): void => {
    return setStoreState({ ...store, ..._store });
  };

  const resetStore = (): void => {
    return setStoreState(StoreDefaultValues.store);
  };

  return <StoreContext.Provider value={{ store, setStore, resetStore }}>{children}</StoreContext.Provider>;
};
