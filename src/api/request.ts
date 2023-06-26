import axios from 'axios';
import { getCookie } from 'cookies-next';
const instanceRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const request = instanceRequest;
export const privateRequest = async (method: string, url: string, payload?: any) => {
  const tokenManager = await getCookie('accessTokenManager');
  return instanceRequest({
    method: method,
    url: url,
    data: payload,
    headers: {
      Authorization: `Bearer ${tokenManager}`,
    },
  });
};

export const privateRequestAdmin = async (method: string, url: string, payload?: any) => {
  const tokenAdmin = await getCookie('accessTokenAdmin');
  return instanceRequest({
    method: method,
    url: url,
    data: payload,
    headers: {
      Authorization: `Bearer ${tokenAdmin}`,
    },
  });
};
