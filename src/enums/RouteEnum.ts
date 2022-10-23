export const RouteEnum = {
  WELCOME: {
    accessor: 'WELCOME',
    path: '/',
  },
  SIGN_IN: {
    accessor: 'SIGN_IN',
    path: '/client/sign-in',
  },
  SIGN_UP: {
    accessor: 'SIGN_UP',
    path: '/register',
  },
  OVERVIEW: {
    accessor: 'OVERVIEW',
    path: '/overview',
    authOnly: true,
  },
  NOT_FOUND: {
    accessor: 'NOT_FOUND',
    path: '/404',
  },
};
