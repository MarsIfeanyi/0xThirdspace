import "@/styles/globals.css";
import type { NextPage } from 'next';
import type { AppType, AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import { useRouter } from 'next/router';

import BounterHunter from "@/components/Layout/BounterHunter";
import CreatorBounties from "@/components/Layout/CreatorBounties";
import PublicLayout from "@/components/Layout/PublicLayout";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

 const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => {
      if (router.pathname.startsWith('/creator')) {
        return <CreatorBounties>{page}</CreatorBounties>;
      }
      if (router.pathname.startsWith('/hunter')) {
        return <BounterHunter>{page}</BounterHunter>;
      }
      return <PublicLayout>{page}</PublicLayout>;
    });

  return getLayout(<Component {...pageProps} />);
}) ;

export default MyApp