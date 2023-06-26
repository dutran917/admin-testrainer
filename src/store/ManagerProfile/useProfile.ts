/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRequest } from 'ahooks';
import { useRecoilState } from 'recoil';

import { adminProfileAtom, initialAdminProfile } from './profile';
import { privateRequestAdmin } from '@api/request';
import { API_PATH } from '@utils/constant';

export const useProfile = () => {
  const [profileAdmin, setProfileAdmin] = useRecoilState(adminProfileAtom);

  const requestGetProfileAdmin = useRequest(
    async () => {
      const profile = await privateRequestAdmin('GET', API_PATH.ADMIN_INFO);
      return profile;
    },
    {
      manual: true,
      onSuccess: (res) => {
        setProfileAdmin({
          ...res.data,
        });
      },
      onError: () => {
        setProfileAdmin(initialAdminProfile);
      },
    },
  );

  return {
    profileAdmin,
    setProfileAdmin,
    requestGetProfileAdmin,
  };
};
