/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useEffect, useState } from 'react';

import { IUseApiProps } from 'interfaces/IUseApi';

import { config } from 'config/config';

const useApi = ({ api, options }: IUseApiProps) => {
  const [response, setResponse] = useState<unknown>(null);
  const [error, setError] = useState<unknown>(false);
  const [loading, setIsLoading] = useState<boolean>(false);

  const call = async (callData?: unknown) => {
    setIsLoading(true);
    const { url, method, headers, data } = api;
    try {
      const res: any = await axios({
        url: `${config.restApi}${url}`,
        method: method,
        headers: {
          ...(headers as any),
        },
        data: callData || data,
      });
      setResponse(res);
      setIsLoading(false);
      if (options?.onSuccess) {
        options.onSuccess(res.data);
      }
    } catch (err: unknown) {
      setError(err);
      setIsLoading(false);
      if (options?.onError) {
        options.onError(err);
      }
    }
  };

  useEffect(() => {
    if (options.autoFetch) call();
  }, []);

  return {
    response,
    error,
    loading,
    call,
  };
};

export default useApi;
