/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IApiProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: unknown;
  headers?: unknown;
}
export interface IUseApiProps {
  api: IApiProps;
  options: {
    onSuccess?: (res: any) => void;
    onError?: (res: any) => void;
    autoFetch?: boolean;
    mock?: boolean;
    withToken?: boolean;
  };
}
