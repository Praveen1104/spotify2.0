import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "@/components/ErrorBoundary";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ErrorBoundary>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ErrorBoundary>
    </SessionProvider>
  );
}
