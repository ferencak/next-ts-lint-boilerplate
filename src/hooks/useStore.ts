import { useContext } from 'react';

import { IStore } from 'interfaces/IStore';

import { StoreContext } from 'providers/store.provider';

export const useStore = () => useContext<IStore>(StoreContext);
