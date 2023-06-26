import type { AppProps } from 'next/app';
// import '../styles/globals.css';
import '../src/styles/globals.css';
import viVN from 'antd/lib/locale/vi_VN';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { ConfigProvider } from 'antd';
import AppLayout from '@layout/AppLayout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={viVN}>
      <Head>
        <meta name='robots' content='index, follow' />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />

        <link rel='icon' type='image/png' href='/images/logo.png' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no'
        />
        <title>Testrainer Admin</title>
      </Head>
      <RecoilRoot>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RecoilRoot>
    </ConfigProvider>
  );
}
