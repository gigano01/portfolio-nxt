import "@/styles/globals.css";
import "normalize.css"
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Noahs Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
