import { useRequest } from 'ahooks';
import { request, privateRequest } from './request';
import { API_PATH } from './constant';

export interface HandleEvent {
  onSuccess: (r: any) => void;
  onError: (r: any) => void;
}

interface TransLocaHistory {
  loca?: number;
  receiver: string | number;
  otp: string;
  typeVerify?: string;
  image?: string;
  loca_bonus?: number;
  phone_email?: string;
}

interface TransPointHistory {
  account_number?: string;
  account_name?: string;
  account_branch?: string;
  bank?: number;
  point?: number;
  image?: string;
  phone_email?: string;
  otp?: string;
  image_bill?: string;
  description?: string;
  code?: string;
}

interface TransNFTHistory {
  location_ids: number[];
  receiver_id: number;
  image?: string;
  note?: string;
  otp: string;
  phone_email: string;
}

export const useGetTransactionHistory = (limit: number, type?: string) => {
  const { data, loading, run } = useRequest(
    (page?: number) => {
      const params: any = {
        page: page,
        limit: limit,
        type: type,
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      return privateRequest(request.get, API_PATH.TRANSACTION_POINT_HISTORY, { params });
    },
    {
      manual: false,
      debounceWait: 300,
    },
  );
  const onChange = (page?: number) => {
    run(page);
  };
  return {
    data: data,
    loading,
    onChange,
  };
};

export const useGetTransactionHistoryAdmin = (limit: number) => {
  const { data, loading, run } = useRequest(
    (page?: number) => {
      const params: any = {
        page: page,
        limit: limit,
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      return privateRequest(request.get, API_PATH.TRANSACTION_POINT_HISTORY_AMDIN, { params });
    },
    {
      manual: false,
      debounceWait: 300,
    },
  );
  const onChange = (page?: number) => {
    run(page);
  };
  return {
    data: data,
    loading,
    onChange,
  };
};

export const useGetTransactionLocaHistory = (limit: number) => {
  const { data, loading, run } = useRequest(
    (page?: number) => {
      const params: any = {
        page: page,
        limit: limit,
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      return privateRequest(request.get, API_PATH.TRANSACTION_LOCA_HISTORY, { params });
    },
    {
      manual: false,
      debounceWait: 300,
    },
  );
  const onChange = (page?: number) => {
    run(page);
  };
  return {
    data: data,
    loading,
    onChange,
  };
};

export const useGetTransactionLocaBonusMain = (limit: number, type?: string) => {
  const { data, loading, run } = useRequest(
    (page?: number, dateFrom?: string, dateTo?: string) => {
      const params: any = {
        page: page,
        limit: limit,
        dateFrom: dateFrom,
        dateTo: dateTo,
        type: type,
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      return privateRequest(request.get, API_PATH.TRANSACTION_LOCA_BONUS_HISTORY, { params });
    },
    {
      manual: false,
      debounceWait: 300,
    },
  );
  const onChange = (page?: number, dateFrom?: string, dateTo?: string) => {
    run(page, dateFrom, dateTo);
  };
  return {
    data: data,
    loading,
    onChange,
  };
};

export const useGetTransactionLocaBonusSub = (limit: number) => {
  const { data, loading, run } = useRequest(
    (page?: number, dateFrom?: string, dateTo?: string) => {
      const params: any = {
        page: page,
        limit: limit,
        dateFrom: dateFrom,
        dateTo: dateTo,
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      return privateRequest(request.get, API_PATH.TRANSACTION_LOCA_BONUS_HISTORY_SUB, { params });
    },
    {
      manual: false,
      debounceWait: 300,
    },
  );
  const onChange = (page?: number, dateFrom?: string, dateTo?: string) => {
    run(page, dateFrom, dateTo);
  };
  return {
    data: data,
    loading,
    onChange,
  };
};

export const usePostTransactionPointHistory = (options: HandleEvent) => {
  return useRequest(
    async (payload: TransPointHistory) => {
      return await privateRequest(request.post, API_PATH.TRANSACTION_POINT_HISTORY, {
        data: payload,
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};

export const usePostTransactionLocaHistory = (options: HandleEvent) => {
  return useRequest(
    async (payload: TransLocaHistory) => {
      return await privateRequest(request.post, API_PATH.TRANSACTION_LOCA_HISTORY, {
        data: payload,
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};

export const usePostTransactionLocaBonusHistory = (options: HandleEvent) => {
  return useRequest(
    async (payload: TransLocaHistory) => {
      return await privateRequest(request.post, API_PATH.TRANSACTION_LOCA_BONUS_HISTORY, {
        data: payload,
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};

export const useGetOTPTransaction = (options?: HandleEvent) => {
  return useRequest(
    async () => {
      return await privateRequest(request.get, API_PATH.TRANSACTION_LOCA_HISTORY_OTP);
    },
    {
      manual: true,
      ...options,
    },
  );
};

export const usePostTransactionPointHistoryRechage = (options: HandleEvent) => {
  return useRequest(
    async (payload: TransPointHistory) => {
      return await privateRequest(request.post, API_PATH.TRANSACTION_POINT_HISTORY_RECHAGE, {
        data: payload,
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};

export const useGetTransactionNFTHistory = (limit: number) => {
  const { data, loading, run } = useRequest(
    (page?: number) => {
      const params: any = {
        page: page,
        limit: limit,
      };
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      return privateRequest(request.get, API_PATH.TRANSACTION_NFT_HISTORY_GET, { params });
    },
    {
      manual: false,
      debounceWait: 300,
    },
  );
  const onChange = (page?: number) => {
    run(page);
  };
  return {
    data: data,
    loading,
    onChange,
  };
};

export const usePostTransactionNFTHistory = (options: HandleEvent) => {
  return useRequest(
    async (payload: TransNFTHistory) => {
      return await privateRequest(request.post, API_PATH.TRANSACTION_NFT_HISTORY_CREATE, {
        data: payload,
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};
