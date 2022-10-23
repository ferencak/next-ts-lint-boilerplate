import { FC, Fragment } from 'react';

import { IError } from 'interfaces/IError';

interface IErrorBoundaryProps {
  error: IError;
  children: JSX.Element | JSX.Element[];
}

/**
 * ErrorBoundary component
 *
 * @param {{ error: { message: any; }; children: any; }} { error: { message }, children }
 * @returns {JSX.Element}
 */
const ErrorBoundary: FC<IErrorBoundaryProps> = ({ error: { message }, children }): JSX.Element => (
  <Fragment>
    {message && (
      <div className="absolute right-10 top-10 w-96 bg-red-500 rounded-lg shadow-2xl p-4">
        <div className="flex flex-col items-start justify-center h-full">
          <div className="text-2xl text-white">An error has occurred!</div>
          <div className="text-white">{message}</div>
        </div>
      </div>
    )}
    {children}
  </Fragment>
);
export default ErrorBoundary;
