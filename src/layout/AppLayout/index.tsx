import { useProfile } from '@store/ManagerProfile/useProfile';
import { useMount } from 'ahooks';
import { useRouter } from 'next/router';

const AppLayout = ({ children }: any) => {
  const { requestGetProfileAdmin } = useProfile();
  const router = useRouter();
  useMount(() => {
    if (router.pathname.includes('/') && !router.pathname.includes('login')) {
      requestGetProfileAdmin.run();
    }
  });
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
