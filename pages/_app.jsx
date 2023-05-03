import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { seo } from "../util/seo";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <DefaultSeo {...seo} />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
