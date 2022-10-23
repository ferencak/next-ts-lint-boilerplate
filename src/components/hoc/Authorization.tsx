import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { IChildren } from 'interfaces/IChildren';

import { RouteEnum } from 'enums/RouteEnum';

import { useStore } from 'hooks/useStore';

const Authorization: FC<IChildren> = ({ children }): JSX.Element => {
  const [isAuthOnlyRoute, setIsAuthOnlyRoute] = useState<boolean>(false);
  const router = useRouter();
  const {
    store: {
      authorization: { isAuthorized },
    },
  } = useStore();
  useEffect(() => {
    const isAuthOnlyRoute: boolean = Object.values(RouteEnum).some(
      (route: { path: string; authOnly?: boolean }) => route.path === router.pathname && route.authOnly
    );
    setIsAuthOnlyRoute(isAuthOnlyRoute);
    if (isAuthOnlyRoute && !isAuthorized) {
      if (router.pathname !== RouteEnum.SIGN_IN.path) {
        router.push(RouteEnum.SIGN_IN.path);
      }
    }
  }, [isAuthorized, router.pathname]);
  return isAuthOnlyRoute && !isAuthorized ? <></> : <>{children}</>;
};

export default Authorization;
