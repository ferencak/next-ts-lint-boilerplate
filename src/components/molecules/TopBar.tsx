import { useRouter } from 'next/router';
import { FC } from 'react';

import Logo from 'components/atoms/logo/Logo';

import { RouteEnum } from 'enums/RouteEnum';

import { useStore } from 'hooks/useStore';

const TopBar: FC = (): JSX.Element => {
  const { store } = useStore();
  const router = useRouter();

  return !store.authorization.isAuthorized ? (
    <div className="flex flex-row w-full items-center justify-between">
      <div className="flex flex-row items-center">
        <Logo onClick={() => router.push(RouteEnum.WELCOME.path)} />
      </div>
      <div className="flex flex-row gap-10 items-center">
        <button className="text-white font-medium rounded-full">Výhody členství</button>
        <button
          className="bg-[#db2828] hover:bg-[#ee3434] duration-75 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => router.push(RouteEnum.SIGN_IN.path)}
        >
          Přihlásit se
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-row w-full items-center justify-between">
      <div className="flex flex-row items-center">
        <Logo />
      </div>
      <div className="flex flex-row gap-10 items-center">
        <button className="text-white font-medium rounded-full">Výhody členství</button>
        <button className="bg-[#db2828] hover:bg-[#ee3434] duration-75 text-white font-bold py-2 px-4 rounded-full">
          Přihlásit se
        </button>
      </div>
    </div>
  );
};

export default TopBar;
