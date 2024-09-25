import "@/styles/globals.css";
import "normalize.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <SpeedInsights />
            <Head>
                <title>Noahs Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
